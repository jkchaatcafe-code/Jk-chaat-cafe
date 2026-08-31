// Generic CRUD factory so Blog/Product/GalleryItem/Testimonial don't each
// need hand-written boilerplate controllers. Pass the Mongoose model and
// (for models with a slug) a flag to auto-generate slugs from title.
function crudFactory(Model, options = {}) {
  const { publicFilter = {}, searchFields = [] } = options;

  return {
    // Public: only returns published/active items, supports basic search + pagination
    async listPublic(req, res, next) {
      try {
        const { page = 1, limit = 12, category, q } = req.query;
        const filter = { ...publicFilter };
        if (category && category !== 'all') filter.category = category;
        if (q && searchFields.length) {
          filter.$or = searchFields.map(f => ({ [f]: { $regex: q, $options: 'i' } }));
        }
        const skip = (Number(page) - 1) * Number(limit);
        const [items, total] = await Promise.all([
          Model.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
          Model.countDocuments(filter),
        ]);
        res.json({ items, total, page: Number(page), pages: Math.ceil(total / limit) });
      } catch (err) { next(err); }
    },

    async getOnePublic(req, res, next) {
      try {
        const query = { ...publicFilter };
        const item = await Model.findOne(req.params.slug ? { ...query, slug: req.params.slug } : { ...query, _id: req.params.id });
        if (!item) return res.status(404).json({ message: 'Not found' });
        res.json(item);
      } catch (err) { next(err); }
    },

    // Admin: full CRUD, no filters
    async listAdmin(req, res, next) {
      try {
        const { page = 1, limit = 20 } = req.query;
        const skip = (Number(page) - 1) * Number(limit);
        const [items, total] = await Promise.all([
          Model.find().sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
          Model.countDocuments(),
        ]);
        res.json({ items, total, page: Number(page), pages: Math.ceil(total / limit) });
      } catch (err) { next(err); }
    },

    async getOneAdmin(req, res, next) {
      try {
        const item = await Model.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Not found' });
        res.json(item);
      } catch (err) { next(err); }
    },

    async create(req, res, next) {
      try {
        const item = await Model.create(req.body);
        res.status(201).json(item);
      } catch (err) { next(err); }
    },

    async update(req, res, next) {
      try {
        const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!item) return res.status(404).json({ message: 'Not found' });
        res.json(item);
      } catch (err) { next(err); }
    },

    async remove(req, res, next) {
      try {
        const item = await Model.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Not found' });
        res.json({ message: 'Deleted' });
      } catch (err) { next(err); }
    },
  };
}

module.exports = crudFactory;