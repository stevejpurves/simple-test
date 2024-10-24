const articleDirective = {
  name: 'listing',
  doc: 'A listing directive that can be used to show a list of articles from a specific venue, collection or kind.',
  arg: {
    type: ' myst',
    doc: 'The title of the listing.',
  },
  body: {
    type: 'myst',
    doc: 'Descriptive content to be displayed along with the listing.',
  },
  options: {
    venue: {
      type: 'string',
      doc: 'The venue to list articles from.',
      required: true,
    },
    collection: {
      type: 'string',
      doc: 'The collection to list articles from.',
      required: false,
    },
    kind: {
      type: 'string',
      doc: 'The kind of articles to list.',
      required: false,
    },
    status: {
      type: 'string',
      doc: 'The status of articles to list (published | in-review).',
      required: false,
    },
    limit: {
      type: 'number',
      doc: 'The maximum number of articles to list.',
      required: false,
    },
  },
  validate(data, vfile) {
    if (!data.venue) {
      vfile.message('A venue must be supplied.');
      return;
    }
    if (data.options.status && !['published', 'in-review'].includes(data.options.status)) {
      vfile.message('Invalid status supplied.');
      return;
    }

    // TODO lookup API and validate venue, collection, kind exist?
    // TODO how to validate against the correct API? dev/staging/prod?

    return data;
  },
  run(data) {
    console.log('data', data);
    return [
      {
        type: 'listing',
        // title: data.arg,
        // description: data.body,
        // ...data.options,
      },
    ]; // GenericNode
  },
};

const plugin = { name: 'Article listing', directives: [articleDirective], version: '1.0.0' };

export default plugin;
