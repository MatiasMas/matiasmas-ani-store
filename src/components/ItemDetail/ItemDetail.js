import './ItemDetail.css';
import {Col, Row} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import {useState} from "react";
import {Link} from "react-router-dom";

const ItemDetail = ({item}) => {

    const [hideCountComponent, setHideCountComponent] = useState(false);

    const onAdd = () => {
        setHideCountComponent(true);
    }

    return (
        <Row>
            <Col>
                <img className={'item-detail-img'} src={item.img} alt={item.name}/>
            </Col>
            <Col className={'item-detail-overview'}>
                <h1 className={'item-title'}>{item.name}</h1>
                <p className={'item-detail-description'}>{item.description}</p>
                <Row className={'rating-section'}>
                    <Col className={'stars-section'}>
                        <box-icon type="regular" name="star"/>
                        <box-icon type="regular" name="star"/>
                        <box-icon type="regular" name="star"/>
                        <box-icon type="regular" name="star"/>
                        <box-icon type="regular" name="star"/>
                    </Col>
                    <Col>
                        <span>{item.rating}</span>
                        <span>{` (${item.reviews} reviews)`}</span>
                    </Col>
                </Row>
                <Row className={'price-section'}>
                    <Col className={'price-info'}>
                        <p className={'item-price'}>{`$${item.price}`}</p>
                        <p className={'item-price-disclaimer'}>Shipping and taxes included.</p>
                    </Col>
                </Row>
                <Row className={'item-counter'}>
                    <Col>
                        {hideCountComponent ?
                            <Link to={'/cart'} hidden={!hideCountComponent} className={'btn btn-primary checkout-button'}>Checkout</Link> :
                            <ItemCount actualStock={item.stock} minimumStock={item.minimumStock} name={item.name} onAdd={onAdd} item={item}/>}
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default ItemDetail;
