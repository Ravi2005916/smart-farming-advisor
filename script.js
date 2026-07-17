function recommend(){

let crop=document.getElementById("crop").value;
let pest=document.getElementById("pest").value;

let output="";

if(crop=="Rice" && pest=="Stem Borer"){

output=`
<h2>Recommended</h2>

<b>Pesticide:</b> Cartap Hydrochloride

<br><br>

<b>Dose:</b> 400g per acre

<br><br>

<b>Spray Time:</b> Morning or Evening
`;

}

else if(crop=="Rice" && pest=="Brown Plant Hopper"){

output=`
<h2>Recommended</h2>

<b>Pesticide:</b> Imidacloprid

<br><br>

Dose: 100ml per acre

`;

}

else if(crop=="Cotton" && pest=="Aphids"){

output=`
<h2>Recommended</h2>

<b>Pesticide:</b> Thiamethoxam

<br><br>

Dose: 100g per acre

`;

}

else if(crop=="Tomato" && pest=="Leaf Spot"){

output=`
<h2>Recommended</h2>

<b>Pesticide:</b> Mancozeb

<br><br>

Dose: 500g per acre

`;

}

else{

output="<h3>No Recommendation Found</h3>";

}

document.getElementById("result").innerHTML=output;

}