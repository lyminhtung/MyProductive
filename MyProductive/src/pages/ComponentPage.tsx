import Button from "../components/button"
import Input from "../components/input"
import Card from "../components/cards/Card"
import * as Icons from "../assets/icon/index"
import * as Images from "../assets/img/index"
const ComponentPage =() =>{
    const UserIcon = () => (
  <svg width="26" height="26" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  </svg>
);
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
        <div className="input-grid">
              <div className="input-group">
                <h4>Basic Inputs</h4>

                <div className='card-display'>
                  <Input
                  placeholder="Enter First Name"
                  leftIcon = {<UserIcon/>}
                />
                </div>
                <div className='card-display'>
                  <Input
                  type="email"
                  placeholder="Enter Fist Name"
                  error="First Name invalid"
                  leftIcon= {<UserIcon/>}
                />
                </div>                
              </div> 
              <div className="input-group">
                <h4>Card</h4>
                 <Card 
                  title={`Language \nLearners`} 
                  icon={<img src={Icons.icon01}></img>} 
                  image={<img src={Images.img01}></img>}
                  color="#FF7171"
                  />
              </div>                            
            </div>
    </>
    )
    
}
export default ComponentPage