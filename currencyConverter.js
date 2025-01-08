import https from'https';
import  readline  from 'readline';
import chalk from 'chalk';

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
const apiKey="5798109141a2331db6b8208a";
const url=`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const convertcurrency=(amount, rate)=>{
  return(amount*rate).toFixed(2);
}
https.get(url,(response)=>{
    let data="";
   response.on('data',(chunk)=>{
     data+= chunk;
   })
   response.on('end',()=>{
    const rates=JSON.parse(data).conversion_rates;
    rl.question('Enter The Amount Of USD:',(amount)=>{
        rl.question('Enter The Target Currency(e.g,PAK,KSA,USD):',(Currency)=>{
         const rate=rates[Currency.toUpperCase()];
         if(rate){
            console.log(`${amount} USD is Approximately ${convertcurrency(amount, rate)} ${Currency}`);
            
         }else{
            console.log(`Invalid Conversion Rate For API`);
            
         }
         rl.close()
        })
    })
   })
})