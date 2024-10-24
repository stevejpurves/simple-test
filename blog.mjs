// src/blog.ts
var blogCardDirective = {
  name: "card:blog",
  doc: "A card that is great for a blog post, showing a thumbnail, date and tags",
  arg: {
    type: "myst",
    doc: "Title of the blog post"
  },
  options: {
    url: { type: String, doc: "Link to the blog post", alias: ["link"] },
    image: { type: String, doc: "Image for a file" },
    date: { type: String, doc: "URL of the logo" },
    tags: { type: String, doc: "Comma separated tags" }
  },
  body: {
    type: "myst",
    doc: "Blog card description"
  },
  run(data, vfile, ctx) {
    var _a, _b, _c, _d, _e, _f;
    const children = [];
    if (data.arg) {
      children.push({
        type: "cardTitle",
        children: data.arg
      });
    }
    if ((_a = data.options) == null ? void 0 : _a.image) {
      children.push({ type: "image", kind: "thumbnail", url: (_b = data.options) == null ? void 0 : _b.image });
    }
    children.push({
      type: "div",
      kind: "body",
      children: [...(_c = data.body) != null ? _c : []]
    });
    const card = {
      type: "card",
      kind: "blog",
      url: (_d = data.options) == null ? void 0 : _d.url,
      children,
      data: {}
    };
    if ((_e = data.options) == null ? void 0 : _e.date) card.data.date = data.options.date;
    if ((_f = data.options) == null ? void 0 : _f.tags) {
      const tags = data.options.tags.split(/[,;\t]/).map((t) => t.trim()).filter((t) => !!t);
      if (tags.length > 0) card.data.tags = tags;
    }
    return [card];
  }
};

// src/index.ts
var plugin = {
  name: "Directives and components for blogs",
  directives: [blogCardDirective],
  roles: [],
  transforms: []
};
var src_default = plugin;
export {
  src_default as default
};
