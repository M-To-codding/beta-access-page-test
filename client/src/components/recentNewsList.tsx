import React from 'react';

function RecentNewsList() {
  return <section className="-padding-top80 -padding-bottom80">
    <div className="container d-flex justify-content-between flex-wrap">

      <h2 className="title w-100 -padding-bottom60">Latest news</h2>

      <article>
        <header className="news-header">
          <img width={300}
               src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/high-angle-view-of-variety-of-succulent-plants-royalty-free-image-1584462052.jpg"
               alt=""/>
        </header>
        <main>
          <h3>Post title</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </main>
      </article>

      <article>
        <header className="news-header">
          <img width={300}
               src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/high-angle-view-of-variety-of-succulent-plants-royalty-free-image-1584462052.jpg"
               alt=""/>
        </header>
        <main>
          <h3>Post title</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </main>
      </article>

      <article>
        <header className="news-header">
          <img width={300}
               src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/high-angle-view-of-variety-of-succulent-plants-royalty-free-image-1584462052.jpg"
               alt=""/>
        </header>
        <main>
          <h3>Post title</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </main>
      </article>

    </div>
  </section>
}

export default RecentNewsList;