import React,{ Fragment, useState, useContext } from 'react';
import BeerContext from '../context/beer/beerContext'

const AddBottle = () => {

    const beerContext = useContext(BeerContext);
    const { addBottle } = beerContext

    const [bottle, setBottle] = useState({
        name: '',
        price: '', 
        type: ''
    });

    const onChange = (e) =>{
        setBottle({...bottle, [e.target.name]: e.target.value});};

    const onSubmit = (e) => {
        e.preventDefault();
        addBottle(bottle);
        setBottle({
            name: '',
            price: '',
            type: ''
        })
    };    
    return (
        <Fragment>
            <form className="bottle-form" onSubmit={onSubmit}>
            <h3 className="add-bottle-title">Add Bottle</h3>
          <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="name">Bottle Name</label>
          <input type="text"  name="name" className="form-control" id="bottleName" onChange={onChange} value={bottle.name} required/>
        </div>
        <div className="form-group col-md-1">
          <label htmlFor="price">Price</label>
          <input type="number" name="price" className="form-control" id="price" onChange={onChange} value={bottle.price} required/>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="type">Beer Type</label>
        <select id="type" className="custom-select" name="type" onChange={onChange} value={bottle.type}>
                            <option value="0">Select Type</option>
                            <option value="Ale">Ale</option>
                            <option value="IPA">IPA</option>
                            <option value="Lager">Lager</option>
                            <option value="Sour">Sour</option>
                            <option value="Porter and Stout">Porter and Stout</option>
                            <option value="Special">Special</option>
                            <option value="Cider">Cider</option>
                            <option value="Wine">Wine</option>
                        </select>
            </div>
            <div className="form-group col-md-2">
            <label htmlFor="add-btn">Submit</label>
            <input type="submit" className="btn btn-success" name="add-btn" value="Add Bottle"/>
            </div>
          </div>
        </form>
        </Fragment>
    )
}       

    export default AddBottle