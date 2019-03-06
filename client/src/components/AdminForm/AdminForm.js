import React from "react";

class AdminForm extends React.Component{
    nameRef = React.createRef();
    quantityRef = React.createRef();
    wineRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    addWine = (event) => {
        event.preventDefault();
        // console.log("Add wine");
        const wine = {
            name: this.nameRef.value.value,
            quantity: parseFloat(this.quantityRef.value.value),
            wine: this.wineRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value,
          }
        console.log(wine);
    };
    render(){
        return(
            <form className="admin-form" onSubmit={this.addWine}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
                <select name="wine" ref={this.wineRef}>
                    <option value="Red">Red</option>
                    <option value="White">white</option>
                    <option value="Rose">Rose</option>
                </select>
                <input name="quantity" ref={this.quantityRef} type="text" placeholder="Quantity"/>
                <textarea name="desc" ref={this.descRef} placeholder="Desc"/>
                <input name="image" ref={this.imageRef} type="text" placeholder="Image"/>
                <button type="submit"> + Add Wine </button>
            </form>
            
        );
    }
}
export default AdminForm;