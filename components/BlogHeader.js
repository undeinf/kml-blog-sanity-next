

export default function BlogHeader({title, subtitle, coverImage, date, author}) {
    return (
      <div className="blog-detail-header">
        
        <h1 className="font-weight-bold blog-detail-header-title mb-0">{title}</h1>
        <h2 className="blog-detail-header-subtitle mb-3">{subtitle}</h2>
          {/* Check if contains cover image */}
          <img
            className="img-fluid rounded" style={{height: "400px",width: "100%"}}
            src={coverImage} alt="TODO: provide alt"/>
        <p className="lead mb-0 d-flex align-items-center justify-content-between pt-4">
          <div>
          <img
            src={author?.avatar}
            className="rounded-circle mr-3"
            height="35px"
            width="35px"
            alt="avatar"/>
          {author?.name}
          </div>
          <div>
          {date}
          </div>
        </p>
      </div>
    )
  }