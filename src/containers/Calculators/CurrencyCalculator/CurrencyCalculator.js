import React, { useEffect, useState } from 'react';
//STYLES
import { ButtonMaterialUi } from '../../../style/ButtonMaterialUi';
import { Input } from '../../../style/Input';
import { CurrencySection, FormStyle, LabelStyle, OptionStyle, ResultSection, SelectStyle, StyleP, Hr } from '../CalculatorsStyle';

const CurrencyCalculator = () => {
   const [dataApiNBP, setDataApiNBP] = useState();
   const [effectiveDate, setEffectiveDate] = useState();
   const [money, setMoney] = useState(1);
   const [toCurrency, setToCurrency] = useState();
   const [result, setResult] = useState("");
   let url;

   if (window.location.protocol == 'http:') {
      url = `http://api.nbp.pl/api/exchangerates/tables/a`;
   } else {
      url = `https://api.nbp.pl/api/exchangerates/tables/a`;
   }

      fetch(url)
         .then(res => res.json())
         .then(data => {
            setDataApiNBP(data[0].rates);
            console.log(data);
            setEffectiveDate(data[0].effectiveDate)
         });
  

   const handleToCurrency = (e) => setToCurrency(e.target.value);
   const handleInputMoney = (e) => setMoney(e.target.value);

   const handleCalcCurrency = (e) => {
      e.preventDefault();

      if (!toCurrency) return;

      console.log("Przed przeliczeniem, money: " + money + "mid waluty: " + toCurrency);

      let result = money ? Number(money) * toCurrency : 'Try again';

      result.toFixed(2);

      console.log("Po przeliczeniu w handleCalcCurrency" + result)

      setResult(result);
      setMoney(1);
   }

   const Option = ({ currency, code, mid }) => <OptionStyle value={mid}>{code} - {currency}</OptionStyle>;

   const options = dataApiNBP ? dataApiNBP.map(curr => <Option key={curr.code} {...curr} />) : "Brak danych";


   return (
      <CurrencySection>
  <Hr />
         <FormStyle onSubmit={handleCalcCurrency}>

            <LabelStyle>Amount in PLN:</LabelStyle>
            <Input type="number" name="money" value={money} onChange={handleInputMoney} min="1" placeholder="200 PLN" />

            <LabelStyle>on currency:  </LabelStyle>
            <SelectStyle value={toCurrency} onChange={handleToCurrency}>
               <OptionStyle defaultSelected disabled hidden>Choose currency</OptionStyle>
               {options}
            </SelectStyle>

            <ButtonMaterialUi type="submit">TRANSFER</ButtonMaterialUi>

         </FormStyle>

         <ResultSection>

            <StyleP>Result: {result}</StyleP>
            <StyleP>The data are from: {effectiveDate}</StyleP>
            
         </ResultSection>
         <Hr />
      </CurrencySection>
   );
}

export default CurrencyCalculator;