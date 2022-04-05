export default function Blog() {
  return (
    <main>
      <h1 className="p-4 text-center">Questions & Answers</h1>

      <div className="p-4">
        <h2>
          What is the <em>Context API</em> ?
        </h2>

        <p>
          The <em>Context API</em> is an API provided by React that allows
          sharing data between a tree of components without having to pass them
          via props manually at every level. The component tree can be very big
          for a big project. In that case, Context API can be used to avoid
          passing data via props again and again.
        </p>

        <h2>
          What are <em>Semantic tags</em> ?
        </h2>

        <p>
          Semantic tags are HTML tags that allow writing semantic HTML or
          meaningful HTML. For example, using the <code>main</code> tag for the
          main content of a page, using <code>nav</code> for the navigations
          areas, <code>aside </code>
          for the sidebar, etc. A few other examples are, <code>h1</code>,
          <code> section</code>,<code> figure</code>, etc.
        </p>
      </div>
    </main>
  );
}
