import { Card } from "react-bootstrap";
import Link from 'next/link'


const CardListItem = ({title, subtitle, slug, date, author, link}) => {
    return(
        <Card className={`fj-card fj-card-list`}>
          <div className="card-body-wrapper" style={{paddingBottom:"20px"}}>
            <Card.Header
              className="d-flex flex-row">
              <img
                src={author?.avatar || 'https://via.placeholder.com/150'}
                className="rounded-circle mr-3"
                height="50px"
                width="50px"
                alt="avatar"/>
                <div>
                  <Card.Title className="font-weight-bold mb-1">{author?.name || 'No Name'}</Card.Title>
                  <Card.Text className="card-date">{date}</Card.Text>
                </div>
            </Card.Header>
            <div className="d-flex align-items-end">
              <Card.Body>
                <Card.Title className="card-main-title">{title}</Card.Title>
                <Card.Text>{subtitle}</Card.Text>
              </Card.Body>
              <Link {...link}>
                <a className="">
                    Read More
                </a>
            </Link>
            </div>
          </div>
          {/* <Link {...link}>
            <a className="card-button">
                Read More
            </a>
          </Link> */}
        </Card>
    )
}

export default CardListItem;