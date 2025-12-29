import "./globals.css"; // tu css (ver paso 2)

export default function Home() {
  return (
    <div className="card-grid-content-list">
      <div className="text-content-heading">
        <h2 className="heading">Heading</h2>
        <p className="subheading">Subheading</p>
      </div>

      <section className="cards">
        <article className="card">
          <img
            className="image"
            src="https://placehold.co/160x160"
            alt="Card Image"
          />
          <div className="body">
            <div className="text">
              <h3 className="title">Title</h3>
              <p className="body-text">
                Body text for whatever you’d like to say. Add main takeaway points, quotes,
                anecdotes, or even a very very short story.
              </p>
            </div>
            <div className="button-group">
              <button className="button">Button</button>
            </div>
          </div>
        </article>

        <article className="card">
          <img
            className="image"
            src="https://placehold.co/160x160"
            alt="Card Image"
          />
          <div className="body">
            <div className="text">
              <h3 className="title">Title</h3>
              <p className="body-text">
                Body text for whatever you’d like to say. Add main takeaway points, quotes,
                anecdotes, or even a very very short story.
              </p>
            </div>
            <div className="button-group">
              <button className="button">Button</button>
            </div>
          </div>
        </article>

        <article className="card">
          <img
            className="image"
            src="https://placehold.co/160x160"
            alt="Card Image"
          />
          <div className="body">
            <div className="text">
              <h3 className="title">Title</h3>
              <p className="body-text">
                Body text for whatever you’d like to say. Add main takeaway points, quotes,
                anecdotes, or even a very very short story.
              </p>
            </div>
            <div className="button-group">
              <button className="button">Button</button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
