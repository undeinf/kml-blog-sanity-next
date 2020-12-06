import { Card, OverlayTrigger, Tooltip } from "react-bootstrap"
import Link from "next/link";
import moment from 'moment';



const CardItem = ({title, slug, subtitle, coverImage, date, author, link}) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {author?.name || 'No Name'}
    </Tooltip>
  );

    return(
      <Card className="card-item">
        <Link {...link}>
    <Card.Img style={{cursor:"pointer"}} variant="top" height="160" width="100" src={coverImage}
                alt="Card image cap" />
                </Link>
    <Card.Body>
    <Link {...link}><Card.Title style={{cursor:"pointer"}}>{title}</Card.Title></Link>
    <Card.Text>{subtitle}</Card.Text>
    </Card.Body>
    <Card.Footer className="d-flex justify-content-between align-items-center pl-3 pr-0">
      <small className="text-muted">Posted On {moment(date).format('LL')}</small>
      <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
      <img
          src={author?.avatar || 'https://via.placeholder.com/150'}
          className="rounded-circle mr-3"
          height="35px"
          width="35px"
          alt={author?.name || 'No Name'}/>
          </OverlayTrigger>
    </Card.Footer>
  </Card>
        // <Card className={`fj-card`}>
        //   <div className="card-body-wrapper">
        //     <Card.Header
        //       className="d-flex flex-row">
        //       <img
        //         src={author?.avatar || 'https://via.placeholder.com/150'}
        //         className="rounded-circle mr-3"
        //         height="50px"
        //         width="50px"
        //         alt="avatar"/>
        //       <div>
        //         <Card.Title className="font-weight-bold mb-1">{author?.name || 'No Name'}</Card.Title>
        //         <Card.Text className="card-date">{moment(date).format('LLL')}</Card.Text>
        //       </div>
        //     </Card.Header>
        //     <div className="view overlay">
        //       <Card.Img
        //         src={coverImage}
        //         alt="Card image cap"
        //       />
        //     </div>
        //     <Card.Body>
        //       <Card.Title className="card-main-title">{title}</Card.Title>
        //       <Card.Text>{subtitle}</Card.Text>
        //     </Card.Body>
        //   </div>
        //   <Link {...link}>
        //     <a className="card-button">
        //       Read More
        //     </a>
        //   </Link>
        // </Card>
    )
}

export default CardItem;