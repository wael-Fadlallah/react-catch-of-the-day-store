import React from 'react';

class EditFishForm extends React.Component {
    onChange = (event) => {
        
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
            
        }
        this.props.updateFish(this.props.index,updatedFish);
        // console.log(index,updatedFish)
    }
    render() {
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.onChange}  value={this.props.fish.name}/>
                <input type="text" name="price" onChange={this.onChange}  value={this.props.fish.price}/>
                <select type="text" name="status" onChange={this.onChange} value={this.props.fish.status}>
                    <option value="unavalible">Unavailable</option>
                    <option value="avalible">Available</option>
                </select>
                <textarea type="text" name="desc" onChange={this.onChange} value={this.props.fish.desc} ></textarea>
                <input type="text" name="image" onChange={this.onChange} value={this.props.fish.image} />

                <button onClick={() => this.props.deleteFish(this.props.index) }>
                    Remove Fish
                </button>
            </div>
        )
    }
}
export default EditFishForm