import * as math from 'mathjs';
import React from 'react';
import { RowStyle, SimpleSection, Hr } from '../CalculatorsStyle';
import Button from './subcomponents/Button';
import ClearButton from './subcomponents/ClearButton';
import Input from './subcomponents/Input';

class SimpleCalculator extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         input: "0",
         operatorClicked: true,
      }
   }

   addToInput = (val) => this.setState({ input: this.state.input + val });

   handleEqual = () => this.setState({ input: math.evaluate(this.state.input) });

   render() {
      return (
         <SimpleSection className="simple-calc">
            <Hr />
            <Input input={this.state.input} />

            <RowStyle className="simple-calc__calc-wrapper--row">
               <Button handleClick={this.addToInput}>7</Button>
               <Button handleClick={this.addToInput}>8</Button>
               <Button handleClick={this.addToInput}>9</Button>
               <Button operator={true} handleClick={this.addToInput}>/</Button>
            </RowStyle>

            <RowStyle className="simple-calc__calc-wrapper--row">
               <Button handleClick={this.addToInput}>4</Button>
               <Button handleClick={this.addToInput}>5</Button>
               <Button handleClick={this.addToInput}>6</Button>
               <Button operator={true} handleClick={this.addToInput}>*</Button>
            </RowStyle>

            <RowStyle className="simple-calc__calc-wrapper--row">
               <Button handleClick={this.addToInput}>1</Button>
               <Button handleClick={this.addToInput}>2</Button>
               <Button handleClick={this.addToInput}>3</Button>
               <Button operator={true} handleClick={this.addToInput}>+</Button>
            </RowStyle>

            <RowStyle className="simple-calc__calc-wrapper--row">
               <Button handleClick={this.addToInput}>.</Button>
               <Button handleClick={this.addToInput}>0</Button>
               <Button handleClick={() => this.handleEqual()}>=</Button>
               <Button operator={true} handleClick={this.addToInput}>-</Button>
            </RowStyle>

            <RowStyle className="row">
               <ClearButton handleClear={() => this.setState({ input: "" })}>Clear</ClearButton>
            </RowStyle>
            <Hr />
         </SimpleSection>

      );
   }
}

export default SimpleCalculator;