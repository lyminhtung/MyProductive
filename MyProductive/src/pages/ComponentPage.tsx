import Button from "../components/button"
const ComponentPage =() =>{
    return(
        <>
        <div className="button-group">
            <h4>Button Sizes</h4>
            <div className="button-row">
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
            </div>
            <div className="button-group">
                    <h4>Button Variants</h4>
                    <div className="button-row">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="outline">Outline</Button>
                    </div>
            </div>
        </div>
    </>
    )
    
}
export default ComponentPage