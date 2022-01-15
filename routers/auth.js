const express = require("express");
const app = express();
const data = require("../API/fetch");
const cryptoSchema = require("../DB/cryptoSchema");
const mongoose = require("mongoose");
const Crypto = mongoose.model("CRYPTO",cryptoSchema);
var name = [];
var last = [];
var buy = [];
var sell = [];
var volume = [];
var base_unit = [];
var cryptoL;

Crypto.find(function(err,crypto){
    cryptoL = crypto.length;
});
function update(){
    data().then(data1=>{
        const {btcinr, xrpinr, ethinr, trxinr, eosinr, zilinr, batinr, zrxinr, reqinr, polyinr} = data1;
        const {name : name0, last : last0, buy: buy0, sell: sell0, volume:volume0, base_unit: base_unit0} = btcinr;
        const {name : name1, last : last1, buy: buy1, sell: sell1, volume: volume1, base_unit:base_unit1} = xrpinr;
        const {name : name2, last : last2, buy: buy2, sell: sell2, volume: volume2, base_unit:base_unit2} = ethinr;
        const {name : name3, last : last3, buy: buy3, sell: sell3, volume: volume3, base_unit:base_unit3} = trxinr;
        const {name : name4, last : last4, buy: buy4, sell: sell4, volume: volume4, base_unit:base_unit4} = eosinr;
        const {name : name5, last : last5, buy: buy5, sell: sell5, volume: volume5, base_unit:base_unit5} = zilinr;
        const {name : name6, last : last6, buy: buy6, sell: sell6, volume: volume6, base_unit:base_unit6} = batinr;
        const {name : name7, last : last7, buy: buy7, sell: sell7, volume: volume7, base_unit:base_unit7} = zrxinr;
        const {name : name8, last : last8, buy: buy8, sell: sell8, volume: volume8, base_unit:base_unit8} = reqinr;
        const {name : name9, last : last9, buy: buy9, sell: sell9, volume: volume9, base_unit:base_unit9} = polyinr;
        var nameUpdate = [name0,name1,name2,name3,name4,name5,name6,name7,name8,name9];
        var lastUpdate = [last0,last1,last2,last3,last4,last5,last6,last7,last8,last9];
        var buyUpDate = [buy0,buy1,buy2,buy3,buy4,buy5,buy6,buy7,buy8,buy9];
        var sellUpdate = [sell0,sell1,sell2,sell3,sell4,sell5,sell6,sell7,sell8,sell9];
        var volumeUpdate = [volume0,volume1,volume2,volume3,volume4,volume5,volume6,volume7,volume8,volume9];
        var base_unitUpdate = [base_unit0,base_unit1,base_unit2,base_unit3,base_unit4,base_unit5,base_unit6,base_unit7,base_unit8,base_unit9];
        for(var i=0; i<10;i++){
        Crypto.updateMany({number:i},{
            name : nameUpdate[i],
            last : lastUpdate[i],
            buy : buyUpDate[i],
            sell : sellUpdate[i],
            volume : volumeUpdate[i],
            base_unit : base_unitUpdate[i]
        },function(err){
            if(err){
                console.log(err)
            }
           
        })
        }
    })
}
setInterval(update, 60000);
app.get("/",function(req,res){
    if(cryptoL!=10){
    data().then(data1=>{
        const {btcinr, xrpinr, ethinr, trxinr, eosinr, zilinr, batinr, zrxinr, reqinr, polyinr} = data1;
        const {name : name0, last : last0, buy: buy0, sell: sell0, volume:volume0, base_unit: base_unit0} = btcinr;
        const {name : name1, last : last1, buy: buy1, sell: sell1, volume: volume1, base_unit:base_unit1} = xrpinr;
        const {name : name2, last : last2, buy: buy2, sell: sell2, volume: volume2, base_unit:base_unit2} = ethinr;
        const {name : name3, last : last3, buy: buy3, sell: sell3, volume: volume3, base_unit:base_unit3} = trxinr;
        const {name : name4, last : last4, buy: buy4, sell: sell4, volume: volume4, base_unit:base_unit4} = eosinr;
        const {name : name5, last : last5, buy: buy5, sell: sell5, volume: volume5, base_unit:base_unit5} = zilinr;
        const {name : name6, last : last6, buy: buy6, sell: sell6, volume: volume6, base_unit:base_unit6} = batinr;
        const {name : name7, last : last7, buy: buy7, sell: sell7, volume: volume7, base_unit:base_unit7} = zrxinr;
        const {name : name8, last : last8, buy: buy8, sell: sell8, volume: volume8, base_unit:base_unit8} = reqinr;
        const {name : name9, last : last9, buy: buy9, sell: sell9, volume: volume9, base_unit:base_unit9} = polyinr;
        name = [name0,name1,name2,name3,name4,name5,name6,name7,name8,name9];
        last = [last0,last1,last2,last3,last4,last5,last6,last7,last8,last9];
        buy = [buy0,buy1,buy2,buy3,buy4,buy5,buy6,buy7,buy8,buy9];
        sell = [sell0,sell1,sell2,sell3,sell4,sell5,sell6,sell7,sell8,sell9];
        volume = [volume0,volume1,volume2,volume3,volume4,volume5,volume6,volume7,volume8,volume9];
        base_unit = [base_unit0,base_unit1,base_unit2,base_unit3,base_unit4,base_unit5,base_unit6,base_unit7,base_unit8,base_unit9];
        for(var i=0; i<10;i++){
        const crypto = new Crypto({
             number : i,
            name : name[i],
            last : last[i],
            buy : buy[i],
            sell : sell[i],
            volume : volume[i],
            base_unit : base_unit[i]
        })
        crypto.save().then(()=>{
            console.log("Successfully added");
    
        })
        .catch(err=>{
            console.log(err);
        })
    }
    });

}
else{
Crypto.find(function(err,crypto){
    if(err){
        console.log(err)
    }
    else{
        data().then(data1=>{
            res.render("homepage",{crypto : crypto, data1:data1});
        });
    }
})

}


    
});

app.get("/btc",function(req,res){
    Crypto.find(function(err,crypto){
        if(err){
            console.log(err)
        }
        else{
            data().then(data1=>{
                res.render("btc",{crypto : crypto, data1:data1});
            });
            
        }
    })
    
});

app.get("/eth",function(req,res){
    Crypto.find(function(err,crypto){
        if(err){
            console.log(err)
        }
        else{
            data().then(data1=>{
                res.render("eth",{crypto : crypto, data1:data1});
            });
            
        }
    });
    
});
app.get("/matic",function(req,res){
    Crypto.find(function(err,crypto){
        if(err){
            console.log(err)
        }
        else{
            data().then(data1=>{
                res.render("matic",{crypto : crypto, data1:data1});
            });
            
        }
    });
})
module.exports = app;