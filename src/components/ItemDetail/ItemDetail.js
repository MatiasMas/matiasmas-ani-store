import './ItemDetail.css';
import {Col, Row} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {

    return (
        <Row>
            <Col>
                <img className={'item-detail-img'} src={item.img} alt={item.name}/>
            </Col>
            <Col  className={'item-detail-overview'}>
                <h1>{item.name}</h1>
                <p className={'item-detail-description'}>{item.description}</p>
                <Row>
                    <Col>
                        <img src="star.png" alt=""/>
                        <img src="star.png" alt=""/>
                        <img src="star.png" alt=""/>
                        <img src="star.png" alt=""/>
                        <img src="star.png" alt=""/>
                    </Col>
                    <Col>
                        <span>{item.rating}</span>
                        <span>{` (${item.reviews} reviews)`}</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{`$${item.price}`}</p>
                        <p>Shipping and taxes extra</p>
                    </Col>
                    <Col>
                        <p>Choose your colors</p>
                        <input type='radio' value='blue'/>
                        <input type='radio' value='red'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ItemCount actualStock={item.stock} minimumStock={item.minimumStock} name={item.name}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default ItemDetail;