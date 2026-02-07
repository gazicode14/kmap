 let par  = document.querySelectorAll("#box");
let butt = document.querySelector("#butt");
let outer = document.querySelector("#outer");
let num = document.querySelectorAll("#num");
let Var2 = document.querySelector("#Var2");
let Var = document.querySelector("#Var");
let Var4 = document.querySelector("#Var4");
let arr = ["hsla(240, 100%, 50%, 0.1)","hsla(0, 100%, 50%, 0.1)","hsla(290, 60%, 50%, 0.1)","hsla(140, 52%, 55%, 0.3)","hsla(30, 61%, 50%, 0.1)","hsla(340, 100%, 70%, 0.1)","hsla(195, 53%, 79%, 0.1)","hsla(55, 53%, 50%, 0.1)"];
let borderArr = ["hsla(240, 100%, 50%, 1)","hsla(0, 100%, 50%, 1)","hsla(290, 60%, 50%, 1)","hsla(140, 52%, 55%, 1)","hsla(30, 61%, 50%, 1)","hsla(340, 100%, 70%, 1)","hsla(195, 53%, 79%, 1)","hsla(55, 53%, 50%, 1)"]; 
let vr = document.querySelectorAll("#vn");//row wise variable
let vc = document.querySelectorAll("#vr");//column wise variable
let rv = document.querySelector("#variableNameRow");
let cv = document.querySelector("#variableNameCol");
let currVariable = 2;
let solved = false;
let val=[];
let visited = new Set();
let nvisited = new Set();
let colorInd = 0;
let boss = [];

let perm = new Set(); ///permutation
 let v = [];
 let ans = [];

 let perm1 = new Set(); ///permutation
 let v1 = [];
 let ans1 = [];

num.forEach(num=>{
    num.addEventListener('click',()=>{
        if(num.innerHTML=="1")num.innerHTML="0";
        else if(num.innerHTML== "0")num.innerHTML="1";
        solved = false;
         val=[];
         visited = new Set();
         nvisited = new Set();
         colorInd = 0;
         const elements = document.querySelectorAll('#ch');
         elements.forEach(function(element) {
         element.parentNode.removeChild(element);
    });
    // auto re-run solver after value change
    butt.click();
    })
});


Var2.addEventListener('click',()=>{
    const elements = document.querySelectorAll('#ch');
         elements.forEach(function(element) {
         element.parentNode.removeChild(element);
         })
    solved=false;
    val = [];
    visited = new Set();
    nvisited = new Set();
    outer.style.height  = "500px";
    outer.style.width = "500px";
    if(currVariable == 4)
    {
        for(let i=15;i>=4;i--)
        {
            par[i].remove();
        }
        par.forEach(box=>{
            box.style.height = "50%";
            box.style.width = "50%";
        })
        for(let i=3;i>=2;i--)
            {
                vc[i].remove();
                vr[i].remove();
            }
        
    }
    else if(currVariable == 3)
    {
        for(let i=7;i>=4;i--)
        {
            par[i].remove();
        }
        par.forEach(box=>{
            box.style.height = "50%";
            box.style.width = "50%";
        })
        for(let i=3;i>=2;i--)
            {
                vr[i].remove();
            }
    }
    
        par = document.querySelectorAll("#box");
        num = document.querySelectorAll("#num");
        vc[0].innerHTML="0";vc[1].innerHTML="1";
        vr[0].innerHTML="0";vr[1].innerHTML="1";
    
    currVariable = 2;
    
    
        
})
// this is for 3 variable button

function createRowVariable()
{
    let nl = document.createElement('button');
            nl.style.height = "100%";
            nl.style.width = "25%";
            nl.style.display = "flex";
            nl.style.flexDirection = "row";
            nl.style.justifyContent = "space-around";
            nl.innerHTML = "1";
            nl.style.fontSize = "24px";
            nl.style.textAlign = "center";
            nl.style.alignItems = "center";
            nl.style.border  = "0px";
            nl.setAttribute('id','vn');
            rv.appendChild(nl);
            vr = document.querySelectorAll("#vn");
}
function createColumnVariable()
{
    let nl = document.createElement('button');
            nl.style.height = "25%";
            nl.style.width = "20px";
            nl.style.display = "flex";
            nl.style.flexDirection = "column";
            nl.style.justifyContent = "space-around";
            nl.innerHTML = "1";
            nl.style.fontSize = "24px";
            nl.style.textAlign = "center";
            nl.style.alignItems = "center";
            nl.style.border  = "0px";
            nl.setAttribute('id','vr');
            cv.appendChild(nl);
            vc = document.querySelectorAll("#vr");
}
Var.addEventListener('click',()=>{
    const elements = document.querySelectorAll('#ch');
         elements.forEach(function(element) {
         element.parentNode.removeChild(element);
         })
    val = [];
    visited = new Set();
    nvisited = new Set();
    solved=false;
    if(currVariable == 2)
    {
        outer.style.width = (outer.offsetWidth*2) +"px";
        rv.style.width = (outer.offsetWidth)+"px";
        for(let i=1;i<=2;i++)
        {
            createRowVariable();
        }
        vr[0].innerHTML="00"; vr[1].innerHTML="01";vr[2].innerHTML="11";vr[3].innerHTML="10";
        for(let i=1;i<=4;i++)
            {
                createBox();
            }
        par.forEach(box=>{
            box.style.width = "25%";
        })
    }
    else if(currVariable == 4)
    {
        
        outer.style.height = ((outer.offsetHeight)/2)+"px";
        cv.style.height = (outer.offsetHeight)+"px";
        for(let i = 15;i>7;i--)
        {
            par[i].remove();
        }
        for(let i=3;i>=2;i--)
        {
            vc[i].remove();
        }
        vc[0].innerHTML = "0"; vc[1].innerHTML= "1";
        par = document.querySelectorAll("#box");
        num = document.querySelectorAll("#num");
         par.forEach(box=>{
            box.style.height = "50%";
        })
        
    }
    num.forEach(num=>{
        num.innerHTML="0";
})
    currVariable = 3;
});

Var4.addEventListener('click',()=>{
    const elements = document.querySelectorAll('#ch');
         elements.forEach(function(element) {
         element.parentNode.removeChild(element);
         })
    val = [];
    visited = new Set();
    nvisited = new Set();
    solved= false;
    if(currVariable == 2)
    {
        outer.style.width = (outer.offsetWidth*2) +"px";
        outer.style.height = (outer.offsetHeight*2) +"px";
        rv.style.width = (outer.offsetWidth)+"px";
        for(let i=1;i<=2;i++) /// variablesss
        {
            let nl = document.createElement('button');
            nl.style.height = "100%";
            nl.style.width = "25%";
            nl.style.display = "flex";
            nl.style.flexDirection = "row";
            nl.style.justifyContent = "space-around";
            nl.innerHTML = "1";
            nl.style.fontSize = "24px";
            nl.style.textAlign = "center";
            nl.style.alignItems = "center";
            nl.style.border  = "0px";
            nl.setAttribute('id','vn');
            rv.appendChild(nl);//row wise
            vr = document.querySelectorAll("#vn");
        }
        vr[0].innerHTML="00";vr[1].innerHTML="01";vr[2].innerHTML="11";vr[3].innerHTML="10";
        cv.style.height = (outer.offsetHeight)+"px";
        for(let i=1;i<=2;i++)
        {
            createColumnVariable();
        }
        vc[0].innerHTML="00";vc[1].innerHTML="01";vc[2].innerHTML="11";vc[3].innerHTML="10";
        for(let i=1;i<=12;i++)
            {
                createBox();
                
            }
            par.forEach(box=>{
                box.style.width = "25%";
                box.style.height = "25%";
            });
    }
    else if(currVariable == 3)
    {
        outer.style.height = (outer.offsetHeight*2)+"px";
        cv.style.height = (outer.offsetHeight)+"px";
        for(let i=1;i<=2;i++)
            {
                let nl = document.createElement('button');
                nl.style.height = "25%";
                nl.style.width = "20px";
                nl.style.display = "flex";
                nl.style.flexDirection = "column";
                nl.style.justifyContent = "space-around";
                nl.innerHTML = "1";
                nl.style.fontSize = "24px";
                nl.style.textAlign = "center";
                nl.style.alignItems = "center";
                nl.style.border  = "0px";
                nl.setAttribute('id','vr');
                cv.appendChild(nl);
                vc = document.querySelectorAll("#vr");
            }
            vc[0].innerHTML="00";vc[1].innerHTML="01";vc[2].innerHTML="11";vc[3].innerHTML="10";
        for(let i=1;i<=8;i++)
        {
            createBox();
                
        }
        par.forEach(box=>{
            box.style.width = "25%";
            box.style.height = "25%";
        });


    }
       num.forEach(num=>{
               num.innerHTML="0";
       })
        currVariable = 4;
        
        num = document.querySelectorAll("#num");
        solved = false;
        val = [];
     visited = new Set();
        
    })




 butt.addEventListener('click',()=>{
    //num = document.querySelectorAll("#num");

    
    if(currVariable == 2)
    {
        let temp=[];
        for(let i=0;i<=3;i++)
        {
            if(num[i].innerHTML =="0")
            {
                temp.push(0);
            }
            else if(num[i].innerHTML == "1")
            {
                temp.push(1);
            }

            if((i+1)%2==0)
            {
                val.push(temp);
                temp = [];
            }
            
        }
    }
    else
    {
        let temp = [];
        for(let i=0;i<num.length;i++)
        {
            if(num[i].innerHTML =="0")
            {
                temp.push(0);
            }
            else
            {
                temp.push(1);
            }
            if((i+1)%4 == 0)
            {
                val.push(temp);
                temp=[];
            }
            
        }
    }
    if(solved==false)
        {
            solve(val);
            solved = true;
            visited = new Set();
            val = [];
            colorInd = 0;
        }

    

});



function solve(val)
 {
    console.log(val);
    let tempy = [0,val.length-1];
    let tempx = [0,val[0].length-1];
    if(allOne(tempy,tempx)==true && notAllVisited(tempy,tempx,0)==true)
    {
        setAllVisited(tempy,tempx);
        drw(0,tempy,tempx);
        //console.log("yes");
        
    }
    else
    {
        if(currVariable == 4)
        {
            
            for(let i = 0;i <= 2;i++)
            {
                let yaxis = [i,i+1];
                let xaxis = [0,3];
                if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,0)==true)
                {
                    
                    setAllVisited(yaxis,xaxis,0);
                    drw(i*val[0].length,yaxis,xaxis);
                    colorInd++;
                    //console.log(visited);
                }
                

            }
            
            
            for(let i = 0;i <= 2;i++)
                {
                    let yaxis = [0,3];
                    let xaxis = [i,i+1];
                    if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,0)==true)
                    {
                        
                        setAllVisited(yaxis,xaxis,0);
                        drw(i,yaxis,xaxis);
                        colorInd++;
                    }
                    
    
                }
                
                  rowWiseUpDown();//8
                  console.log("visited is ",visited);
                  rowWiseLeftRight();//8
                  ufourCorner(1);
                  ufourLeftRight(1);
                allpossiblefour();
                 

                  
                otherallpossiblefour();


                   fourLeftRight(1);
            //       //fourUpDown();
            //       //fourCorner();
            //       //utwoColUp(1);
            //       //utwoColDown(1);
            //       //utwoRowRight(1);
                   allPossibletwos();
                   twoCol(1);
                   twoRow(1);
                
                  twoUpDown();//doinggg.....
                  twoLeftRight(val.length);
                  onCell();           
        }
        if(currVariable == 3)
        {
            rowWiseFour(1);          // Check horizontal groups of 4
            square(1);               // Check 2x2 squares (groups of 4)
            forThreeLeftRight();     // Check wrap-around groups of 4
            allPossibletwos();       // THEN check groups of 2
            twoRow(1);
            twoCol(1);
            twoLeftRight(val.length);
            onCell();    
            
        }
        if(currVariable == 2)
        {
            twoRow(1);
            twoCol(1);
            onCell();
        }
        
    }
 }
 function otherallpossiblefour()
 {
    //console.log("on func vis is ",visited);
    let array1 = [square,reversesquare,rowWiseFour,colWiseFour,fourLeftRight,fourUpDown,fourCorner];
    let functionArray1 = [];
    for(let i=0;i<=6;i++)
    {
        //console.log(i);
        let cn = array1[i](3);
        console.log("for ",i," cn is ",cn);

        if(cn >=1 )
        {
            
            functionArray1.push(array1[i]); 
        }
        array1[i](2);
       
    }
    console.log("founded func is ",functionArray1);
    allpermutation1(functionArray1);
    console.log("v1 is ",v1);
    let final = [];
    let temp = [];
    for(let i=0;i<v1.length;i++)
    {
        temp.push(v1[i]);
        if((i+1)%functionArray1.length == 0)
        {
            final.push(temp);
            temp = [];
        }
    }

    //console.log("final is ",final);
   let fpos ;
   let  cnt = 10;
   if(final.length>=1)
   {
    for(let i=0;i<final.length;i++)
        {
          let temp = 0;
         for(let j=0;j<final[0].length;j++)
         {
             temp += final[i][j](3);
            console.log("after ",final[i][j]," temp is ",temp);
             //console.log(nvisited);
         }
         //console.log("for ",final[i],"temp is ",temp);
         for(let k=0;k<final[0].length;k++)
             {
                 final[i][k](2);
             }
         if(temp<cnt)
         {
             cnt = temp;
             fpos = i;
         }
        }
        for(let j= 0;j<final[0].length;j++)
        {
          final[fpos][j](1);
        }
     
   }
 }
 function allpossiblefour()
 {
    let array = [usquare,urowWiseFour,ucolWiseFour,ufourUpDown,ufourLeftRight];
    let functionArray = [];
    for(let i=0;i<=4;i++)
    {
        //console.log(i);
        let cn = array[i](3);

        if(cn >=1 )
        {
            functionArray.push(array[i]); 
        }
        array[i](2);
        //console.log(nvisited);
    }
    //console.log("Arra size is ",functionArray.length);
    console.log(functionArray);
    allpermutation(functionArray);
    let final = [];
    let temp = [];
    for(let i=0;i<v.length;i++)
    {
        temp.push(v[i]);
        if((i+1)%functionArray.length == 0)
        {
            final.push(temp);
            temp = [];
        }
    }

   // console.log(final);
   let fpos ;
   let  cnt = 0;
   if(final.length>=1)
   {
    for(let i=0;i<final.length;i++)
        {
          let temp = 0;
            for(let j=0;j<final[0].length;j++)
            {
                temp += final[i][j](3);

            }
         //ekhan theke non-unique four gula ber korte hobe
         
                
                console.log("for ",final[i],"temp is ",temp);
                for(let j=0;j<final[0].length;j++)
                    {
                        final[i][j](2);
                    }
                    if(temp>cnt)
                    {
                        cnt = temp;
                        fpos = i;
                    }
        }
        for(let i=0;i<final[fpos].length;i++)
        {
            final[fpos][i](1);
        }
        
     
   }
//    else
//    {
//     otherallpossiblefour();
//    }
 }
 function allpermutation1(fa)
 {
    //console.log("allperm 1");
    if(ans1.length == fa.length)
    {
        //console.log(ans);
        v1.push(...ans1);
        return;
    }
    for(let i = 0;i<fa.length;i++)
    {
        if(perm1.has(i.toString())==false)
        {
            perm1.add(i.toString());
            ans1.push(fa[i]);
            allpermutation1(fa);
            perm1.delete(i.toString());
            ans1.pop();
        }
    }
 }
 
 function allpermutation(fa)
 {
    if(ans.length == fa.length)
    {
        //console.log(ans);
        v.push(...ans);
        return;
    }
    for(let i = 0;i<fa.length;i++)
    {
        if(perm.has(i.toString())==false)
        {
            perm.add(i.toString());
            ans.push(fa[i]);
            allpermutation(fa);
            perm.delete(i.toString());
            ans.pop();
        }
    }
 }
 function usquare(p)
 {
    if(p==1)
    {
        for(let i=0;i<val.length-1;i++)
            {
                for(let j=0;j<val[0].length-1;j++)
                {
                    let yaxis = [i,i+1];
                    let xaxis = [j,j+1];
                    if(allOne(yaxis,xaxis)==true && AllVisited(yaxis,xaxis,0)==true)
                    {
                        
                        setAllVisited(yaxis,xaxis,0);
                        drw((i*val[0].length)+j,yaxis,xaxis); colorInd++;
                    }
                }
            }
    }
    else if(p==2)
    {
        for(let i=0;i<val.length-1;i++)
            {
                for(let j=0;j<val[0].length-1;j++)
                {
                    let yaxis = [i,i+1];
                    let xaxis = [j,j+1];
                    setUnvisited(yaxis,xaxis);
                }
            }
    }
    else if(p==3)
    {
        let cnt = 0;
        for(let i=0;i<val.length-1;i++)
            {
                for(let j=0;j<val[0].length-1;j++)
                {
                    let yaxis = [i,i+1];
                    let xaxis = [j,j+1];
                    if(allOne(yaxis,xaxis)==true && AllVisited(yaxis,xaxis,3)==true)
                    {
                        
                        setAllVisited(yaxis,xaxis,3);
                        //drw((i*val[0].length)+j,yaxis,xaxis); colorInd++;
                        cnt++;
                    }
                }
            }
            
            return cnt;
    }
 }
 function firstOne(p)
 {  
    if(p<=2)
    {
        utwoRowLeft(p);utwoColUp(p);
                   
        
    }
    else 
    {
        let sum = utwoRowLeft(p)+utwoColUp(p);
        return sum;
    } 
 }
 function secondOne(p)
 {
    if(p<=2)
    {
        utwoRowLeft(p);utwoColDown(p);
    }
    else return utwoRowLeft(p)+utwoColDown(p);
 }
 function thirdOne(p)
 {
    if(p<=2)
        {
            utwoRowRight(p);utwoColUp(p);
            //if(p==1) console.log("its the third one");
        }
        else return utwoRowRight(p)+utwoColUp(p);
 }
 function fourthOne(p)
 {
    if(p<=2)
        {
            utwoRowRight(p);utwoColDown(p);
        }
        else return utwoRowRight(p)+utwoColDown(p);
 }
function fifthOne(p)
{
    if(p<=2)
    {
        utwoColUp(p);utwoRowLeft(p);
    }
    else return utwoColUp(p)+utwoRowLeft(p);
}
function sixthOne(p)
{
    if(p<=2)
        {
            utwoColUp(p);utwoRowRight(p);
        }
        else return utwoColUp(p)+utwoRowRight(p);
}
function seventhOne(p)
{
    if(p<=2)
    {
        utwoColDown(p);utwoRowLeft(p);
    }
    else
    {
       let sum =  utwoColDown(p)+utwoRowLeft(p);
       return sum;
    } 
}
function eightOne(p)
{
    if(p<=2)
        {
            utwoColDown(p);utwoRowRight(p);
        }
        return utwoColDown(p)+utwoRowRight(p);
}

 function allPossibletwos()
 {
    let allpos = [];
    let one = firstOne(3);
    // console.log("after counting visited is ", visited);
    // console.log("after counting nvisited is ", nvisited);
    allpos.push(one);
    //console.log("from one ",one);
    firstOne(2);
    //console.log("after clearing visited is ",visited);
    //console.log(visited);
    let two = secondOne(3);
    allpos.push(two);
    //console.log(two);
    secondOne(2);
    
    let three = thirdOne(3);
    allpos.push(three);
    thirdOne(2);

    let four = fourthOne(3);
    allpos.push(four);
    fourthOne(2);

    let five = fifthOne(3);
    allpos.push(five);
    fifthOne(2);

    let six = sixthOne(3);
    allpos.push(six);
    sixthOne(2);
    //console.log("from sixth one ",six);

    let seven = seventhOne(3);
    allpos.push(seven);
    seventhOne(2);
    //console.log("from seven ",seven);

    let eight = eightOne(3);
    allpos.push(eight);
    eightOne(2);

    let maxVal = 0;
     let posi = 5;
    // if(allpos[0]>allpos[1])posi = 0;
    // else posi  = 6;
    //console.log("size of array is ",allpos.length);
    for(let i= 0;i<=7;i++)
    {
        if(allpos[i]>maxVal)
        {
            maxVal = allpos[i];
            posi= i;
        }
        //console.log("ith is ", allpos[i],"\n");
    }

    //console.log("lowest is ",posi);
    if(posi == 0) firstOne(1);
    else if(posi == 1) secondOne(1);
    else if(posi == 2) thirdOne(1);
    else if(posi == 3) fourthOne(1);
    else if(posi == 4) fifthOne(1);
    else if(posi == 5) sixthOne(1);
    else if(posi == 6) seventhOne(1);
    else if(posi == 7) eightOne(1);


 }
 function setUnvisited(n,m)
 {
    //console.log("yes");
    for(let i = n[0];i<=n[1];i++)
        {
            for(let j = m[0] ; j<=m[1]; j++)
            {
                let ns = [i,j];
                if(nvisited.has(ns.toString())==true)
                {
                    nvisited.clear(ns.toString());
                    //visited.clear(ns.toString());
                }
            }
        }
 }
 function notAllVisited(n,m,p)
 {
    let damn = false;
    // if(visited.size == 0)return true;
    // else
    // {
        for(let i = n[0];i<=n[1];i++)
        {
            for(let j = m[0] ; j<=m[1]; j++)
            {
                let ns = [i,j];
                if(p<=3)
                {
                        if(visited.has(ns.toString())==false && nvisited.has(ns.toString())==false) 
                        {
                            damn = true;
                                    
                        }
                }
                
                // else if(p==3)
                //     {
                //         if(nvisited.has(ns.toString())==false) 
                //             {
                //                 damn = true;
                                        
                //             }
                //     }//nvisited.add(ns.toString());
            }
         }
        return damn; 
    //}
    
 }
 function setAllVisited(n,m,p)
 {
    for(let i = n[0];i<=n[1];i++)
        {
            for(let j = m[0] ; j<=m[1]; j++)
            {
                let ns = [i,j];
               if(p<=2) 
                {
                    if(visited.has(ns.toString()) == false )visited.add(ns.toString());
                    if(nvisited.has(ns.toString()) == false )nvisited.add(ns.toString());
                }
               else 
               {
                 
                    nvisited.add(ns.toString());
                 
               }
                
            }
        }
 }

 function AllVisited(n,m,p)
 {
    
        for(let i = n[0];i<=n[1];i++)
        {
            for(let j = m[0] ; j<=m[1]; j++)
            {
                let ns = [i,j];
                if(p<3)
                {
                    if(visited.has(ns.toString())==true)
                        {
                            return false;
                        }
                }
                else
                {
                    if(nvisited.has(ns.toString())==true || visited.has(ns.toString())==true)
                    {
                        return false;
                    }
                }
                
                
            }
        }
        return true;
    
 }
 function utwoColUp(p)
 {
    if(p==1)
    {
        for(let i=0;i<val[0].length;i++)
            {
                 for(let j=0;j<val.length-1;j++)
                 {
                     let yaxis = [j,j+1];
                     let xaxis = [i,i];
                     if(allOne(yaxis,xaxis)==true && AllVisited(yaxis,xaxis,2)==true)
                     {
                         //console.log("draw utwocol");
                         setAllVisited(yaxis,xaxis,0);
                         if(currVariable>=3)drw(j*4+i,yaxis,xaxis);
                         else drw(j*2+i,yaxis,xaxis);
                         colorInd++;
                         
                     }
                 }
            }
    }
    else if(p==2)
    {
        for(let i=0;i<val[0].length;i++)
            {
                 for(let j=0;j<val.length-1;j++)
                 {
                     let yaxis = [j,j+1];
                     let xaxis = [i,i];
                     
                         
                         setUnvisited(yaxis,xaxis);
                         
                         
                     
                 }
            }
    }
    else 
    {
        let cnt = 0;
        for(let i=0;i<val[0].length;i++)
            {
                 for(let j=0;j<val.length-1;j++)
                 {
                     let yaxis = [j,j+1];
                     let xaxis = [i,i];
                     if(allOne(yaxis,xaxis)==true && AllVisited(yaxis,xaxis,3)==true)
                     {
                         
                         setAllVisited(yaxis,xaxis,3);
                         cnt++;
                         
                     }
                 }
            }
            //console.log("colup cnt is ",cnt);
            return cnt;
    }
 }
 function utwoColDown(p)
 {
    if(p==1)
    {
        for(let i=val[0].length-1;i>=0;i--)
            {
                 for(let j=val.length-1;j>=1;j--)
                 {
                     let yaxis = [j-1,j];
                     let xaxis = [i,i];
                     if(allOne(yaxis,xaxis)==true && AllVisited(yaxis,xaxis,2)==true)
                     {
                         console.log("draw utwocol");
                         setAllVisited(yaxis,xaxis,0);
                         if(currVariable>=3)drw(j*4+i-4,yaxis,xaxis);
                         //else drw(j*2+i,yaxis,xaxis);
                         colorInd++;
                         
                     }
                 }
            }
    }
    else if(p==2)
    {
        for(let i=val[0].length-1;i>=0;i--)
            {
                 for(let j=val.length-1;j>=1;j--)
                 {
                     let yaxis = [j-1,j];
                     let xaxis = [i,i];
                     
                         
                         setUnvisited(yaxis,xaxis);
                         
                         
                     
                 }
            }
    }
    else 
    {
        let cnt = 0;
        for(let i=val[0].length-1;i>=0;i--)
            {
                 for(let j=val.length-1;j>=1;j--)
                 {
                     let yaxis = [j-1,j];
                     let xaxis = [i,i];
                     if(allOne(yaxis,xaxis)==true && AllVisited(yaxis,xaxis,3)==true)
                     {
                         
                         setAllVisited(yaxis,xaxis,3);
                         cnt+= 1;
                         
                     }
                 }
            }
            //console.log("after utwoColDown from seven nv is ",nvisited);
            //console.log("cnt for utwoColDown is ",cnt);
            return cnt;
    }
 }
 function utwoRowLeft(p)
 {
    if(p==1)
    {
        //console.log("odhh");
        //console.log("after all ",visited);
        for(let i=0;i<val.length;i++)
            {
                 for(let j=0;j<val[0].length-1;j++)
                 {
                     let yaxis = [i,i];
                     let xaxis = [j,j+1];
                     
                     if(allOne(yaxis,xaxis)==true && AllVisited(yaxis,xaxis,2)==true)
                     {
                         //console.log("draw utworow");
                         setAllVisited(yaxis,xaxis,0);
                         if(currVariable==4 || currVariable==3) drw((i*4+j),yaxis,xaxis);
                         
                         else if(currVariable == 2)drw((i*2+j),yaxis,xaxis);
                         colorInd++;
                     }
                 }
            }
    }
    else if(p==2)
    {
        //console.log("removing part of utwoRowLeft");
        for(let i=0;i<val.length;i++)
            {
                 for(let j=0;j<val[0].length-1;j++)
                 {
                     let yaxis = [i,i];
                     let xaxis = [j,j+1];
                     
                     
                         
                        setUnvisited(yaxis,xaxis);
                         
                     
                 }
            }
    }
    else
    {
        //console.log("counting part of utwoRowLeft");
        let cnt = 0;
        for(let i=0;i<val.length;i++)
            {
                 for(let j=0;j<val[0].length-1;j++)
                 {
                     let yaxis = [i,i];
                     let xaxis = [j,j+1];
                     
                     if(allOne(yaxis,xaxis)==true && AllVisited(yaxis,xaxis,3)==true)
                     {
                         
                         setAllVisited(yaxis,xaxis,3);
                         //console.log("found unique row");
                         cnt++;
                     }
                 }
            }
            //console.log("from utwoRowLeft cnt is ",cnt);
            return cnt;
    }
 }
 function utwoRowRight(p)
 {
    if(p==1)
    {
        //console.log("odhh");
        //console.log("after all ",visited);
        for(let i=0;i<val.length;i++)
            {
                 for(let j=val[0].length-1;j>=1;j--)
                 {
                     let yaxis = [i,i];
                     let xaxis = [j-1,j];
                     
                     if(allOne(yaxis,xaxis)==true && AllVisited(yaxis,xaxis,2)==true)
                     {
                         //console.log("draw utworow");
                         setAllVisited(yaxis,xaxis,0);
                         if(currVariable>=3) drw((i*4+j-1),yaxis,xaxis);
                         
                         else if(currVariable == 2)drw((i*2+j),yaxis,xaxis);
                         colorInd++;
                     }
                 }
            }
    }
    else if(p==2)
    {
        for(let i=0;i<val.length;i++)
            {
                 for(let j=val[0].length-1;j>=1;j--)
                 {
                     let yaxis = [i,i];
                     let xaxis = [j-1,j];
                     
                     
                         
                        setUnvisited(yaxis,xaxis);
                         
                     
                 }
            }
    }
    else
    {
        let cnt = 0;
        for(let i=0;i<val.length;i++)
            {
                 for(let j=val[0].length-1;j>=1;j--)
                 {
                     let yaxis = [i,i];
                     let xaxis = [j-1,j];
                     
                     if(allOne(yaxis,xaxis)==true && AllVisited(yaxis,xaxis,3)==true)
                     {
                         
                         setAllVisited(yaxis,xaxis,3);
                         //console.log("found unique row");
                         cnt++;
                     }
                 }
            }
            //console.log("cnt is ",cnt);
            return cnt;
    }
 }
 function forThreeLeftRight()
 {
    let cor = [[0,0],[0,3],[1,0],[1,3]];
    if((val[0][0]*val[0][3]*val[1][0]*val[1][3]) == 1 && (!visited.has(cor[0].toString()) || !visited.has(cor[1].toString()) || !visited.has(cor[2].toString()) || !visited.has(cor[3].toString())))
    {
        visited.add(cor[0].toString());
        visited.add(cor[1].toString());
        visited.add(cor[2].toString());
        visited.add(cor[3].toString());
        let el = document.createElement('div');
                let rect1 = par[0].getBoundingClientRect();
           
                        el.style.height = (rect1.height*2-100) + "px"; // Adjusted height with -10 pixels
                        el.style.width =  ((rect1.width)-60) + "px";// Adjusted width with -10 pixels
                        el.style.borderRadius = "0px 12px 12px 0px";
                        el.style.left="0px";
                        el.style.border = "5px solid " + borderArr[colorInd];//border color working
                        //el.style.borderBlockColor = borderArr[1];
                        el.style.position = "absolute";
                        el.style.zIndex = "1";
                        el.style.top= "47px";
                        el.style.backgroundColor = arr[colorInd];//color array;
                        el.style.borderLeft = "none"; //to remove border of any side
                        el.setAttribute('id','ch');
                        par[0].appendChild(el);
        
                        let el1 = document.createElement('div');
                        let Rect1 = par[0].getBoundingClientRect();
                        el1.style.height = (Rect1.height*2-100) + "px"; // Adjusted height with -10 pixels
                        el1.style.width =  ((Rect1.width)-60) + "px";//
                        el1.style.zIndex = "1";
                        el1.style.position = "absolute";
                        el1.style.border = "5px solid " + borderArr[colorInd];
                        el1.style.backgroundColor = arr[colorInd];
                        el1.style.borderRight = "none";
                        el1.style.borderRadius = "12px 0px 0px 12px";
                        el1.style.top = "47px";
                        el1.style.left="50px";
                        el1.setAttribute('id','ch');
                        par[3].appendChild(el1);
                        colorInd++;

    }
 }
 function twoLeftRight(n)
 {
    for(let i=0;i<n;i++)
    {
        let cor = [[i,0],[i,3]];
        if(val[i][0]==1 && val[i][3]==1 && (!visited.has(cor[0].toString()) || !visited.has(cor[1].toString())))
        {
            visited.add(cor[0].toString());
            visited.add(cor[1].toString());
            let el = document.createElement('div');
                let rect1 = par[0].getBoundingClientRect();
           
                        el.style.height = (rect1.height-100) + "px"; // Adjusted height with -10 pixels
                        el.style.width =  ((rect1.width)-45) + "px";// Adjusted width with -10 pixels
                        el.style.borderRadius = "0px 12px 12px 0px";
                        el.style.left="0px";
                        el.style.border = "5px solid " + borderArr[colorInd];//border color working
                        //el.style.borderBlockColor = borderArr[1];
                        el.style.position = "absolute";
                        el.style.zIndex = "1";
                        el.style.top= "47px";
                        el.style.backgroundColor = arr[colorInd];//color array;
                        el.style.borderLeft = "none"; //to remove border of any side
                        el.setAttribute('id','ch');
                        par[i*4].appendChild(el);
        
                        let el1 = document.createElement('div');
                        let Rect1 = par[0].getBoundingClientRect();
                        el1.style.height = (Rect1.height-100) + "px"; // Adjusted height with -10 pixels
                        el1.style.width =  ((Rect1.width)-45) + "px";//
                        el1.style.zIndex = "1";
                        el1.style.position = "absolute";
                        el1.style.border = "5px solid " + borderArr[colorInd];
                        el1.style.backgroundColor = arr[colorInd];
                        el1.style.borderRight = "none";
                        el1.style.borderRadius = "12px 0px 0px 12px";
                        el1.style.top = "47px";
                        el1.style.left="38px";
                        el1.setAttribute('id','ch');
                        par[i*4+3].appendChild(el1);
                        colorInd++;
        }
    }
 }
 function twoUpDown()
 {
    
    for(let i=0;i<=3;i++)
    {
        let cor = [[0,i],[3,i]];
        if(val[0][i]==1 && val[3][i]==1 && (!visited.has(cor[0].toString()) || !visited.has(cor[1].toString())))
        {
            visited.add(cor[0].toString());
            visited.add(cor[1].toString());
            let el = document.createElement('div');
                let rect1 = par[0].getBoundingClientRect();
           
                        el.style.height = (rect1.height-50) + "px"; // Adjusted height with -10 pixels
                        el.style.width =  ((rect1.width)-80) + "px";// Adjusted width with -10 pixels
                        el.style.borderRadius = "0px 0px 12px 12px";
                        el.style.left="35px";
                        el.style.border = "5px solid " + borderArr[colorInd];//border color working
                        //el.style.borderBlockColor = borderArr[1];
                        el.style.position = "absolute";
                        el.style.zIndex = "1";
                        el.style.top= "0px";
                        el.style.backgroundColor = arr[colorInd];//color array;
                        el.style.borderTop = "none"; //to remove border of any side
                        el.setAttribute('id','ch');
                        par[i].appendChild(el);
        
                        let el1 = document.createElement('div');
                        let Rect1 = par[0].getBoundingClientRect();
                        el1.style.height = (Rect1.height-50) + "px"; // Adjusted height with -10 pixels
                        el1.style.width =  ((Rect1.width)-80) + "px";//
                        el1.style.zIndex = "1";
                        el1.style.position = "absolute";
                        el1.style.border = "5px solid " + borderArr[colorInd];
                        el1.style.backgroundColor = arr[colorInd];
                        el1.style.borderBottom = "none";
                        el1.style.borderRadius = "12px 12px 0px 0px";
                        el1.style.top = "46px";
                        el1.style.left="35px";
                        el1.setAttribute('id','ch');
                        par[i+12].appendChild(el1);
                        colorInd++;
        }
    }
 }
 function fourCorner(p)
 {
    if(p==1)
    {
        let cor = [[0,0],[0,3],[3,0],[3,3]];
    if(val[0][0]==1 && val[0][3]==1 && val[3][0]==1 && val[3][3]==1 && (!visited.has(cor[0].toString()) || !visited.has(cor[1].toString()) || !visited.has(cor[2].toString()) || !visited.has(cor[3].toString())))
        {
            visited.add(cor[0].toString());
            visited.add(cor[1].toString());
            visited.add(cor[2].toString());
            visited.add(cor[3].toString());
            let el = document.createElement('div');
                let rect1 = par[0].getBoundingClientRect();
           
                        el.style.height = (rect1.height-50) + "px"; // Adjusted height with -10 pixels
                        el.style.width =  ((rect1.width)-60) + "px";// Adjusted width with -10 pixels
                        el.style.borderRadius = "0px 0px 12px 0px";
                        el.style.left="0px";
                        el.style.border = "5px solid " + borderArr[colorInd];//border color working
                        //el.style.borderBlockColor = borderArr[1];
                        el.style.position = "absolute";
                        el.style.zIndex = "1";
                        el.style.top= "0px";
                        el.style.backgroundColor = arr[colorInd];//color array;
                        el.style.borderLeft = "none";
                        el.style.borderTop ="none";
                        el.setAttribute('id','ch');
                        par[0].appendChild(el);
        
                        let el1 = document.createElement('div');
                        let Rect1 = par[0].getBoundingClientRect();
                        el1.style.height = (Rect1.height-50) + "px"; // Adjusted height with -10 pixels
                        el1.style.width =  ((Rect1.width)-60) + "px";//
                        el1.style.zIndex = "1";
                        el1.style.position = "absolute";
                        el1.style.border = "5px solid " + borderArr[colorInd];
                        el1.style.backgroundColor = arr[colorInd];
                        el1.style.borderRight = "none";
                        el1.style.borderTop = "none";
                        el1.style.borderRadius = "0px 0px 0px 12px";
                        el1.style.top = "0px";
                        el1.style.left="50px";
                        el1.setAttribute('id','ch');
                        par[3].appendChild(el1);

                        let el2 = document.createElement('div');
                        let Rect2 = par[0].getBoundingClientRect();
                        el2.style.height = (Rect2.height-50) + "px"; // Adjusted height with -10 pixels
                        el2.style.width =  ((Rect2.width)-60) + "px";//
                        el2.style.zIndex = "1";
                        el2.style.position = "absolute";
                        el2.style.border = "5px solid " + borderArr[colorInd];
                        el2.style.backgroundColor = arr[colorInd];
                        el2.style.borderLeft = "none";
                        el2.style.borderBottom = "none";
                        el2.style.borderRadius = "0px 12px 0px 0px";
                        el2.style.top = "45px";
                        el2.style.left="0px";
                        el2.setAttribute('id','ch');
                        par[12].appendChild(el2);

                        let el3 = document.createElement('div');
                        let Rect3 = par[0].getBoundingClientRect();
                        el3.style.height = (Rect3.height-50) + "px"; // Adjusted height with -10 pixels
                        el3.style.width =  ((Rect3.width)-60) + "px";//
                        el3.style.zIndex = "1";
                        el3.style.position = "absolute";
                        el3.style.border = "5px solid " + borderArr[colorInd];
                        el3.style.backgroundColor = arr[colorInd];
                        el3.style.borderRight = "none";
                        el3.style.borderBottom = "none";
                        el3.style.borderRadius = "12px 0px 0px 0px";
                        el3.style.top = "45px";
                        el3.style.left="50px";
                        el3.setAttribute('id','ch');
                        par[15].appendChild(el3);
                        colorInd++;

        }  
    }
    else if(p==2)
    {
        let cor = [[0,0],[0,3],[3,0],[3,3]];
        
            nvisited.delete(cor[0].toString());
            nvisited.delete(cor[1].toString());
            nvisited.delete(cor[2].toString());
            nvisited.delete(cor[3].toString());
    }
    else if(p==3)
    {
        let cnt = 0;
        let cor = [[0,0],[0,3],[3,0],[3,3]];
        if(val[0][0]==1 && val[0][3]==1 && val[3][0]==1 && val[3][3]==1 && (visited.has(cor[0].toString())==false || visited.has(cor[1].toString())==false || visited.has(cor[2].toString())==false || visited.has(cor[3].toString())==false))
        {
            nvisited.add(cor[0].toString());
            nvisited.add(cor[1].toString());
            nvisited.add(cor[2].toString());
            nvisited.add(cor[3].toString());
            cnt+=1;
        }  
        return cnt;
    }
 }
 function ufourCorner(p)
 {
    if(p==1)
    {
        let cor = [[0,0],[0,3],[3,0],[3,3]];
    if(val[0][0]==1 && val[0][3]==1 && val[3][0]==1 && val[3][3]==1 && (visited.has(cor[0].toString())==false && visited.has(cor[1].toString())==false && visited.has(cor[2].toString())==false && visited.has(cor[3].toString())==false))
        {
            visited.add(cor[0].toString());
            visited.add(cor[1].toString());
            visited.add(cor[2].toString());
            visited.add(cor[3].toString());
            let el = document.createElement('div');
                let rect1 = par[0].getBoundingClientRect();
           
                        el.style.height = (rect1.height-50) + "px"; // Adjusted height with -10 pixels
                        el.style.width =  ((rect1.width)-60) + "px";// Adjusted width with -10 pixels
                        el.style.borderRadius = "0px 0px 12px 0px";
                        el.style.left="0px";
                        el.style.border = "5px solid " + borderArr[colorInd];//border color working
                        //el.style.borderBlockColor = borderArr[1];
                        el.style.position = "absolute";
                        el.style.zIndex = "1";
                        el.style.top= "0px";
                        el.style.backgroundColor = arr[colorInd];//color array;
                        el.style.borderLeft = "none";
                        el.style.borderTop ="none";
                        el.setAttribute('id','ch');
                        par[0].appendChild(el);
        
                        let el1 = document.createElement('div');
                        let Rect1 = par[0].getBoundingClientRect();
                        el1.style.height = (Rect1.height-50) + "px"; // Adjusted height with -10 pixels
                        el1.style.width =  ((Rect1.width)-60) + "px";//
                        el1.style.zIndex = "1";
                        el1.style.position = "absolute";
                        el1.style.border = "5px solid " + borderArr[colorInd];
                        el1.style.backgroundColor = arr[colorInd];
                        el1.style.borderRight = "none";
                        el1.style.borderTop = "none";
                        el1.style.borderRadius = "0px 0px 0px 12px";
                        el1.style.top = "0px";
                        el1.style.left="50px";
                        el1.setAttribute('id','ch');
                        par[3].appendChild(el1);

                        let el2 = document.createElement('div');
                        let Rect2 = par[0].getBoundingClientRect();
                        el2.style.height = (Rect2.height-50) + "px"; // Adjusted height with -10 pixels
                        el2.style.width =  ((Rect2.width)-60) + "px";//
                        el2.style.zIndex = "1";
                        el2.style.position = "absolute";
                        el2.style.border = "5px solid " + borderArr[colorInd];
                        el2.style.backgroundColor = arr[colorInd];
                        el2.style.borderLeft = "none";
                        el2.style.borderBottom = "none";
                        el2.style.borderRadius = "0px 12px 0px 0px";
                        el2.style.top = "45px";
                        el2.style.left="0px";
                        el2.setAttribute('id','ch');
                        par[12].appendChild(el2);

                        let el3 = document.createElement('div');
                        let Rect3 = par[0].getBoundingClientRect();
                        el3.style.height = (Rect3.height-50) + "px"; // Adjusted height with -10 pixels
                        el3.style.width =  ((Rect3.width)-60) + "px";//
                        el3.style.zIndex = "1";
                        el3.style.position = "absolute";
                        el3.style.border = "5px solid " + borderArr[colorInd];
                        el3.style.backgroundColor = arr[colorInd];
                        el3.style.borderRight = "none";
                        el3.style.borderBottom = "none";
                        el3.style.borderRadius = "12px 0px 0px 0px";
                        el3.style.top = "45px";
                        el3.style.left="50px";
                        el3.setAttribute('id','ch');
                        par[15].appendChild(el3);
                        colorInd++;

        }  
    }
    else if(p==2)
    {
        let cor = [[0,0],[0,3],[3,0],[3,3]];
        
            nvisited.delete(cor[0].toString());
            nvisited.delete(cor[1].toString());
            nvisited.delete(cor[2].toString());
            nvisited.delete(cor[3].toString());
            
        
    }
    else if(p==3)
    {
        let cnt = 0;
        let cor = [[0,0],[0,3],[3,0],[3,3]];
        if(val[0][0]==1 && val[0][3]==1 && val[3][0]==1 && val[3][3]==1 && (nvisited.has(cor[0].toString())==false && nvisited.has(cor[1].toString())==false && nvisited.has(cor[2].toString())==false && nvisited.has(cor[3].toString())==false))
        {
            nvisited.add(cor[0].toString());
            nvisited.add(cor[1].toString());
            nvisited.add(cor[2].toString());
            nvisited.add(cor[3].toString());
            cnt+=1;
        }  
        return cnt;
    }
 }
 function ufourLeftRight(p)
 {
    if(p==1)
    {
        for(let i=0;i<=2;i++)
            {
                let yaxis = [i,i+1];
                let xaxis = [0,0];
                let yyaxis = [i,i+1];
                let xxaxis = [3,3];
                if(allOne(yaxis,xaxis) && allOne(yyaxis,xxaxis) && AllVisited(yaxis,xaxis,0) && AllVisited(yyaxis,xxaxis,0))
                    {
                        setAllVisited(yaxis,xaxis,0);
                        setAllVisited(yyaxis,xxaxis,0);
                        
                        let el = document.createElement('div');
                        let rect1 = par[0].getBoundingClientRect();
                   
                                el.style.height = (rect1.height*2-100) + "px"; // Adjusted height with -10 pixels
                                el.style.width =  ((rect1.width)-60) + "px";// Adjusted width with -10 pixels
                                el.style.borderRadius = "0px 12px 12px 0px";
                                el.style.left="0px";
                                el.style.border = "5px solid " + borderArr[colorInd];//border color working
                                //el.style.borderBlockColor = borderArr[1];
                                el.style.position = "absolute";
                                el.style.zIndex = "1";
                                el.style.top= "47px";
                                el.style.backgroundColor = arr[colorInd];//color array;
                                el.style.borderLeft = "none"; //to remove border of any side
                                el.setAttribute('id','ch');
                                par[i*4].appendChild(el);
                
                                let el1 = document.createElement('div');
                                let Rect1 = par[0].getBoundingClientRect();
                                el1.style.height = (Rect1.height*2-100) + "px"; // Adjusted height with -10 pixels
                                el1.style.width =  ((Rect1.width)-60) + "px";//
                                el1.style.zIndex = "1";
                                el1.style.position = "absolute";
                                el1.style.border = "5px solid " + borderArr[colorInd];
                                el1.style.backgroundColor = arr[colorInd];
                                el1.style.borderRight = "none";
                                el1.style.borderRadius = "12px 0px 0px 12px";
                                el1.style.top = "47px";
                                el1.style.left="50px";
                                el1.setAttribute('id','ch');
                                par[i*4+3].appendChild(el1);
                                colorInd++;
                 }
            }
    }
    else if(p==2)
    {
        for(let i=0;i<=2;i++)
            {
                let yaxis = [i,i+1];
                let xaxis = [0,0];
                let yyaxis = [i,i+1];
                let xxaxis = [3,3];
                
                        setUnvisited(yaxis,xaxis);
                        setUnvisited(yyaxis,xxaxis);
                        
                        
                 
            }
    }
    else if(p==3)
    {
        let cnt  = 0;
        for(let i=0;i<=2;i++)
            {
                let yaxis = [i,i+1];
                let xaxis = [0,0];
                let yyaxis = [i,i+1];
                let xxaxis = [3,3];
                if(allOne(yaxis,xaxis) && allOne(yyaxis,xxaxis) && (AllVisited(yaxis,xaxis,3)==true && AllVisited(yyaxis,xxaxis,3)==true))
                    {
                        setAllVisited(yaxis,xaxis,3);
                        setAllVisited(yyaxis,xxaxis,3);
                        cnt++;
                        
                 }
            }
            return cnt;
    }
 }
 function fourLeftRight(p)
 { 
    if(p==1)
    {
        for(let i=0;i<=2;i++)
            {
                let yaxis = [i,i+1];
                let xaxis = [0,0];
                let yyaxis = [i,i+1];
                let xxaxis = [3,3];
                if(allOne(yaxis,xaxis) && allOne(yyaxis,xxaxis) && (notAllVisited(yaxis,xaxis,0)==true || notAllVisited(yyaxis,xxaxis,0)==true))
                    {
                        setAllVisited(yaxis,xaxis,0);
                        setAllVisited(yyaxis,xxaxis,0);
                        
                        let el = document.createElement('div');
                        let rect1 = par[0].getBoundingClientRect();
                   
                                el.style.height = (rect1.height*2-100) + "px"; // Adjusted height with -10 pixels
                                el.style.width =  ((rect1.width)-60) + "px";// Adjusted width with -10 pixels
                                el.style.borderRadius = "0px 12px 12px 0px";
                                el.style.left="0px";
                                el.style.border = "5px solid " + borderArr[colorInd];//border color working
                                //el.style.borderBlockColor = borderArr[1];
                                el.style.position = "absolute";
                                el.style.zIndex = "1";
                                el.style.top= "47px";
                                el.style.backgroundColor = arr[colorInd];//color array;
                                el.style.borderLeft = "none"; //to remove border of any side
                                el.setAttribute('id','ch');
                                par[i*4].appendChild(el);
                
                                let el1 = document.createElement('div');
                                let Rect1 = par[0].getBoundingClientRect();
                                el1.style.height = (Rect1.height*2-100) + "px"; // Adjusted height with -10 pixels
                                el1.style.width =  ((Rect1.width)-60) + "px";//
                                el1.style.zIndex = "1";
                                el1.style.position = "absolute";
                                el1.style.border = "5px solid " + borderArr[colorInd];
                                el1.style.backgroundColor = arr[colorInd];
                                el1.style.borderRight = "none";
                                el1.style.borderRadius = "12px 0px 0px 12px";
                                el1.style.top = "47px";
                                el1.style.left="50px";
                                el1.setAttribute('id','ch');
                                par[i*4+3].appendChild(el1);
                                colorInd++;
                                console.log("found left rght");
                 }
            }
    }
    else if(p==2)
    {
        for(let i=0;i<=2;i++)
            {
                let yaxis = [i,i+1];
                let xaxis = [0,0];
                let yyaxis = [i,i+1];
                let xxaxis = [3,3];
                
                        setUnvisited(yaxis,xaxis,3);
                        setUnvisited(yyaxis,xxaxis,3);
                        
                 
            }
    }
    else if(p==3)
    {
        let cnt = 0;
        for(let i=0;i<=2;i++)
            {
                let yaxis = [i,i+1];
                let xaxis = [0,0];
                let yyaxis = [i,i+1];
                let xxaxis = [3,3];
                if(allOne(yaxis,xaxis) && allOne(yyaxis,xxaxis) && (notAllVisited(yaxis,xaxis,3)==true || notAllVisited(yyaxis,xxaxis,3)==true))
                  {
                    setUnvisited(yaxis,xaxis,3);
                    setUnvisited(yyaxis,xxaxis,3);
                  }      
                        
                 
            }
            return cnt;
    }
 }
 function ufourUpDown(p)
 {
    if(p==1 && val.length>=4)
    {
        for(let i=0;i<=2;i++)
            {
                let yaxis = [0,0];
                let xaxis = [i,i+1];
                let yyaxis = [3,3];
                let xxaxis = [i,i+1];
                if(allOne(yaxis,xaxis) && allOne(yyaxis,xxaxis) && (AllVisited(yaxis,xaxis,0)==true && AllVisited(yyaxis,xxaxis,0)==true))
                    {
                        setAllVisited(yaxis,xaxis,0);
                        setAllVisited(yyaxis,xxaxis,0);
                        
                        let el = document.createElement('div');
                        let rect1 = par[0].getBoundingClientRect();
                   
                                el.style.height = (rect1.height-50) + "px"; // Adjusted height with -10 pixels
                                el.style.width =  ((rect1.width*2)-80) + "px";// Adjusted width with -10 pixels
                                el.style.borderRadius = "0px 0px 12px 12px";
                                el.style.left="35px";
                                el.style.border = "5px solid " + borderArr[colorInd];//border color working
                                //el.style.borderBlockColor = borderArr[1];
                                el.style.position = "absolute";
                                el.style.zIndex = "1";
                                el.style.top= "0px";
                                el.style.backgroundColor = arr[colorInd];//color array;
                                el.style.borderTop = "none"; //to remove border of any side
                                el.setAttribute('id','ch');
                                par[i].appendChild(el);
                
                                let el1 = document.createElement('div');
                                let Rect1 = par[0].getBoundingClientRect();
                                el1.style.height = (Rect1.height-50) + "px"; // Adjusted height with -10 pixels
                                el1.style.width =  ((Rect1.width*2)-80) + "px";//
                                el1.style.zIndex = "1";
                                el1.style.position = "absolute";
                                el1.style.border = "5px solid " + borderArr[colorInd];
                                el1.style.backgroundColor = arr[colorInd];
                                el1.style.borderBottom = "none";
                                el1.style.borderRadius = "12px 12px 0px 0px";
                                el1.style.top = "46px";
                                el1.style.left="35px";
                                el1.setAttribute('id','ch');
                                par[i+12].appendChild(el1);
                                colorInd++;
                
                    }
        
            }
    }
    else if(p==2)
    {
        for(let i=0;i<=2;i++)
            {
                let yaxis = [0,0];
                let xaxis = [i,i+1];
                let yyaxis = [3,3];
                let xxaxis = [i,i+1];
                
                        setUnvisited(yaxis,xaxis);
                        setUnvisited(yyaxis,xxaxis);
                        
        
            }
    }
    else if(p==3)
    {
        let cnt = 0;
        for(let i=0;i<=2;i++)
            {
                let yaxis = [0,0];
                let xaxis = [i,i+1];
                let yyaxis = [3,3];
                let xxaxis = [i,i+1];
                if(allOne(yaxis,xaxis) && allOne(yyaxis,xxaxis) && (AllVisited(yaxis,xaxis,3)==true && AllVisited(yyaxis,xxaxis,3)==true))
                    {
                        setAllVisited(yaxis,xaxis,3);
                        setAllVisited(yyaxis,xxaxis,3);
                        cnt++;
                        
                
                    }
        
            }
            return cnt;
    }
 }
 function fourUpDown(p)
 {
    if(p==1)
    {
        for(let i=0;i<=2;i++)
            {
                let yaxis = [0,0];
                let xaxis = [i,i+1];
                let yyaxis = [3,3];
                let xxaxis = [i,i+1];
                if(allOne(yaxis,xaxis) && allOne(yyaxis,xxaxis) && (notAllVisited(yaxis,xaxis,0)==true || notAllVisited(yyaxis,xxaxis,0)==true))
                    {
                        setAllVisited(yaxis,xaxis,0);
                        setAllVisited(yyaxis,xxaxis,0);
                        
                        let el = document.createElement('div');
                        let rect1 = par[0].getBoundingClientRect();
                   
                                el.style.height = (rect1.height-50) + "px"; // Adjusted height with -10 pixels
                                el.style.width =  ((rect1.width*2)-80) + "px";// Adjusted width with -10 pixels
                                el.style.borderRadius = "0px 0px 12px 12px";
                                el.style.left="35px";
                                el.style.border = "5px solid " + borderArr[colorInd];//border color working
                                //el.style.borderBlockColor = borderArr[1];
                                el.style.position = "absolute";
                                el.style.zIndex = "1";
                                el.style.top= "0px";
                                el.style.backgroundColor = arr[colorInd];//color array;
                                el.style.borderTop = "none"; //to remove border of any side
                                el.setAttribute('id','ch');
                                par[i].appendChild(el);
                
                                let el1 = document.createElement('div');
                                let Rect1 = par[0].getBoundingClientRect();
                                el1.style.height = (Rect1.height-50) + "px"; // Adjusted height with -10 pixels
                                el1.style.width =  ((Rect1.width*2)-80) + "px";//
                                el1.style.zIndex = "1";
                                el1.style.position = "absolute";
                                el1.style.border = "5px solid " + borderArr[colorInd];
                                el1.style.backgroundColor = arr[colorInd];
                                el1.style.borderBottom = "none";
                                el1.style.borderRadius = "12px 12px 0px 0px";
                                el1.style.top = "46px";
                                el1.style.left="35px";
                                el1.setAttribute('id','ch');
                                par[i+12].appendChild(el1);
                                colorInd++;
                
                    }
        
            }
    }
    else if(p==2)
    {
        for(let i=0;i<=2;i++)
            {
                let yaxis = [0,0];
                let xaxis = [i,i+1];
                let yyaxis = [3,3];
                let xxaxis = [i,i+1];
                
                        setUnvisited(yaxis,xaxis,3);
                        setUnvisited(yyaxis,xxaxis,3);
                        
                        
                    
        
            }
    }
    else if(p==3)
    {
        let cnt = 0;
        for(let i=0;i<=2;i++)
            {
                let yaxis = [0,0];
                let xaxis = [i,i+1];
                let yyaxis = [3,3];
                let xxaxis = [i,i+1];
                if(allOne(yaxis,xaxis) && allOne(yyaxis,xxaxis) && (notAllVisited(yaxis,xaxis,3)==true || notAllVisited(yyaxis,xxaxis,3)==true))
                    {
                        setAllVisited(yaxis,xaxis,3);
                        setAllVisited(yyaxis,xxaxis,3);
                        cnt++;
                        
                    }
        
            }
            return cnt;
    }
 }
 function rowWiseLeftRight()
 {
    let yaxis = [0,3];
    let xaxis = [0,0];
    let yyaxis = [0,3];
    let xxaxis = [3,3];

    if(allOne(yaxis,xaxis) && allOne(yyaxis,xxaxis) && (notAllVisited(yaxis,xaxis,0)==true || notAllVisited(yyaxis,xxaxis,0)==true))
    {
        setAllVisited(yaxis,xaxis,0);
        setAllVisited(yyaxis,xxaxis,0);
        
        let el = document.createElement('div');
        let rect1 = par[0].getBoundingClientRect();
   
                el.style.height = (rect1.height*4-80) + "px"; // Adjusted height with -10 pixels
                el.style.width =  ((rect1.width)-60) + "px";// Adjusted width with -10 pixels
                el.style.borderRadius = "0px 12px 12px 0px";
                el.style.left="0px";
                el.style.border = "5px solid " + borderArr[colorInd];//border color working
                //el.style.borderBlockColor = borderArr[1];
                el.style.position = "absolute";
                el.style.zIndex = "1";
                el.style.top= "47px";
                el.style.backgroundColor = arr[colorInd];//color array;
                el.style.borderLeft = "none"; //to remove border of any side
                el.setAttribute('id','ch');
                par[0].appendChild(el);

                let el1 = document.createElement('div');
                let Rect1 = par[0].getBoundingClientRect();
                el1.style.height = (Rect1.height*4-80) + "px"; // Adjusted height with -10 pixels
                el1.style.width =  ((Rect1.width)-60) + "px";//
                el1.style.zIndex = "1";
                el1.style.position = "absolute";
                el1.style.border = "5px solid " + borderArr[colorInd];
                el1.style.backgroundColor = arr[colorInd];
                el1.style.borderRight = "none";
                el1.style.borderRadius = "12px 0px 0px 12px";
                el1.style.top = "47px";
                el1.style.left="50px";
                el1.setAttribute('id','ch');
                par[3].appendChild(el1);
                colorInd++;
 }
}

 function rowWiseUpDown()
 {
    let yaxis = [0,0];
    let xaxis = [0,3];
    let yyaxis = [3,3];
    let xxaxis = [0,3];

    if(allOne(yaxis,xaxis) && allOne(yyaxis,xxaxis) && (notAllVisited(yaxis,xaxis,0)==true || notAllVisited(yyaxis,xxaxis,0)))
    {
        setAllVisited(yaxis,xaxis,0);
        setAllVisited(yyaxis,xxaxis,0);
        console.log("after visited ",visited);
        let el = document.createElement('div');
        let rect1 = par[0].getBoundingClientRect();
   
                el.style.height = (rect1.height-60) + "px"; // Adjusted height with -10 pixels
                el.style.width =  ((rect1.width*4)-80) + "px";// Adjusted width with -10 pixels
                el.style.borderRadius = "0px 0px 12px 12px";
                el.style.left="35px";
                el.style.border = "5px solid " + borderArr[colorInd];//border color working
                //el.style.borderBlockColor = borderArr[1];
                el.style.position = "absolute";
                el.style.zIndex = "1";
                el.style.top= "0px";
                el.style.backgroundColor = arr[colorInd];//color array;
                el.style.borderTop = "none"; //to remove border of any side
                el.setAttribute('id','ch');
                par[0].appendChild(el);

                let el1 = document.createElement('div');
                let Rect1 = par[0].getBoundingClientRect();
                el1.style.height = (Rect1.height-60) + "px"; // Adjusted height with -10 pixels
                el1.style.width =  ((Rect1.width*4)-80) + "px";//
                el1.style.zIndex = "1";
                el1.style.position = "absolute";
                el1.style.border = "5px solid " + borderArr[colorInd];
                el1.style.backgroundColor = arr[colorInd];
                el1.style.borderBottom = "none";
                el1.style.borderRadius = "12px 12px 0px 0px";
                el1.style.top = "56px";
                el1.style.left="35px";
                el1.setAttribute('id','ch');
                par[12].appendChild(el1);
                colorInd++;

    }
 }
 function onCell()
 {
    for(let i=0;i<val.length;i++)
    {
        for(let j=0;j<val[0].length;j++)
        {
            let yaxis = [i,i];
            let xaxis = [j,j];
            if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,0)==true)
            {
                setAllVisited(yaxis,xaxis,0);
               if(currVariable==4 || currVariable == 3) drw((i*4+j),yaxis,xaxis);
            //    else if(currVariable == 3) drw((i*3+j),yaxis,xaxis);
               else if(currVariable == 2)drw((i*2+j),yaxis,xaxis);
               colorInd++;
            }
        }
    }
 }
 function twoRow(p)
 {
   
    if(p==1)
    {
        for(let i=0;i<val.length;i++)
            {
                 for(let j=0;j<val[0].length-1;j++)
                 {
                     let yaxis = [i,i];
                     let xaxis = [j,j+1];
                     
                     if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,0)==true)
                     {
                         
                         setAllVisited(yaxis,xaxis,0);
                         if(currVariable==4 || currVariable==3) drw((i*4+j),yaxis,xaxis);
                         
                         else if(currVariable == 2)drw((i*2+j),yaxis,xaxis);
                         colorInd++;
                     }
                 }
            }
    }
    else if(p==2)
    {
        for(let i=0;i<val.length;i++)
            {
                 for(let j=0;j<val[0].length-1;j++)
                 {
                     let yaxis = [i,i];
                     let xaxis = [j,j+1];
                     
                     
                         
                         setUnvisited(yaxis,xaxis);
                         
                 }
            }
    }
    else
    {
        let cnt = 0;
        for(let i=0;i<val.length;i++)
            {
                 for(let j=0;j<val[0].length-1;j++)
                 {
                     let yaxis = [i,i];
                     let xaxis = [j,j+1];
                     
                     if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,3)==true)
                     {
                         
                         setAllVisited(yaxis,xaxis,3);
                         cnt++;
                     }
                 }
            }
            return cnt;
    }
 }
 function twoCol(p)
 {
    if(p==1)
    {
        for(let i=0;i<val[0].length;i++)
            {
                 for(let j=0;j<val.length-1;j++)
                 {
                     let yaxis = [j,j+1];
                     let xaxis = [i,i];
                     if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,0)==true)
                     {
                         
                         setAllVisited(yaxis,xaxis,0);
                         if(currVariable>=3)drw(j*4+i,yaxis,xaxis);
                         else drw(j*2+i,yaxis,xaxis);
                         colorInd++;
                         
                     }
                 }
            }
    }
    else if(p==2)
    {
        for(let i=0;i<val[0].length;i++)
            {
                 for(let j=0;j<val.length-1;j++)
                 {
                     let yaxis = [j,j+1];
                     let xaxis = [i,i];
                     
                         
                         setUnvisited(yaxis,xaxis);
                         
                 }
            }
    }
    else
    {
        let cnt = 0;
        for(let i=0;i<val[0].length;i++)
            {
                 for(let j=0;j<val.length-1;j++)
                 {
                     let yaxis = [j,j+1];
                     let xaxis = [i,i];
                     if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,3)==true)
                     {
                         
                         setAllVisited(yaxis,xaxis,3);
                         cnt++;
                         
                     }
                 }
            }
            return cnt;
    }
 }
 function rowWiseFour(p)
 {
    
    if(p==1)
    {
        for(let i = 0;i<val.length;i++)
            {
                
                let yaxis = [i,i];
                let xaxis = [0,3];
                
                if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,0)==true)
                {
                   
                    setAllVisited(yaxis,xaxis,0);
                    drw(i*4,yaxis,xaxis); colorInd++;
                    
                }
               
            }
    }
    else if(p==2)
    {
        for(let i = 0;i<val.length;i++)
            {
                
                let yaxis = [i,i];
                let xaxis = [0,3];
                
                
                   
                    setUnvisited(yaxis,xaxis,3);
                    
                    
            
            }
    }
    else if(p==3)
    {
        let cnt = 0;
        for(let i = 0;i<val.length;i++)
            {
                
                let yaxis = [i,i];
                let xaxis = [0,3];
                
                if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,3)==true)
                {
                   
                    setAllVisited(yaxis,xaxis,3);
                    cnt++;
                    
                }
               
            }
            return cnt;
    }
 }
 function urowWiseFour(p)
 {
    
    if(p==1)
    {
        for(let i = 0;i<val.length;i++)
            {
                
                let yaxis = [i,i];
                let xaxis = [0,3];
                
                if(allOne(yaxis,xaxis)==true && AllVisited(yaxis,xaxis,0)==true)
                {
                   
                    setAllVisited(yaxis,xaxis,0);
                    drw(i*4,yaxis,xaxis); colorInd++;
                    
                }
               
                
                
    
            }
    }
    else if(p==2)
    {
        for(let i = 0;i<val.length;i++)
            {
                
                let yaxis = [i,i];
                let xaxis = [0,3];
                
                
                   
                    setUnvisited(yaxis,xaxis);
                    //drw(i*4,yaxis,xaxis); colorInd++;
               
                
                
    
            }
    }
    else if(p==3)
    {
        let cnt = 0;
        for(let i = 0;i<val.length;i++)
            {
                
                let yaxis = [i,i];
                let xaxis = [0,3];
                
                if(allOne(yaxis,xaxis)==true && AllVisited(yaxis,xaxis,3)==true)
                {
                   
                    setAllVisited(yaxis,xaxis,3);
                    //drw(i*4,yaxis,xaxis); colorInd++;
                    cnt++;
                }
               
                
                
    
            }
             return cnt;
    }
 }
 function colWiseFour(p)
 {
    if(p==1)
    {
        for(let i = 0;i <= 3;i++)
            {
                let yaxis = [0,3];
                let xaxis = [i,i];
                if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,0)==true)
                {
                    setAllVisited(yaxis,xaxis,0);
                    drw(i,yaxis,xaxis); colorInd++;
                }
                
    
            }
    }
    else if(p==2)
    {
        for(let i = 0;i <= 3;i++)
            {
                let yaxis = [0,3];
                let xaxis = [i,i];
                
                    setUnvisited(yaxis,xaxis,3);
                    //drw(i,yaxis,xaxis); colorInd++;
                
                
    
            }
    }
    else if(p==3)
    {
        let cnt = 0;
        for(let i = 0;i <= 3;i++)
            {
                let yaxis = [0,3];
                let xaxis = [i,i];
                if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,3)==true)
                {
                    setAllVisited(yaxis,xaxis,3);
                    cnt++;
                }
                
    
            }
            return cnt;
    }
 }
 function ucolWiseFour(p)
 {
    if(val.length==4 && p==1)
    {
        for(let i = 0;i <= 3;i++)
            {
                let yaxis = [0,3];
                let xaxis = [i,i];
                if(allOne(yaxis,xaxis)==true && AllVisited(yaxis,xaxis,0)==true)
                {
                    setAllVisited(yaxis,xaxis,0);
                    drw(i,yaxis,xaxis); colorInd++;
                }
                
    
            }
    }
    else if(p==2)
    {
        for(let i = 0;i <= 3;i++)
            {
                let yaxis = [0,3];
                let xaxis = [i,i];
                
                    setUnvisited(yaxis,xaxis);
                    //drw(i,yaxis,xaxis); colorInd++;
                
    
            }
    }
    else if(p==3)
    {
        //console.log("from colwise four");
        let cnt = 0;
        for(let i = 0;i <= 3;i++)
            {
                let yaxis = [0,3];
                let xaxis = [i,i];
                if(allOne(yaxis,xaxis)==true && AllVisited(yaxis,xaxis,3)==true)
                {
                    setAllVisited(yaxis,xaxis,3);
                    //drw(i,yaxis,xaxis); colorInd++;
                    cnt++;
                }
                
    
            }
            return cnt;
    }
 }

 function square(p)
 {
    if(p==1)
    {
        for(let i=0;i<val.length-1;i++)
            {
                for(let j=0;j<val[0].length-1;j++)
                {
                    let yaxis = [i,i+1];
                    let xaxis = [j,j+1];
                    if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,0)==true)
                    {
                        //onsole.log("found non unique square");
                        setAllVisited(yaxis,xaxis,0);
                        drw((i*val[0].length)+j,yaxis,xaxis); colorInd++;
                    }
                }
            }
    }
    else if(p==2)
    {
        for(let i=0;i<val.length-1;i++)
            {
                for(let j=0;j<val[0].length-1;j++)
                {
                    let yaxis = [i,i+1];
                    let xaxis = [j,j+1];
                    
                        setUnvisited(yaxis,xaxis);
                        
                    
                }
            }
    }
    else if(p==3)
    {
        let cnt = 0;
        for(let i=0;i<val.length-1;i++)
            {
                for(let j=0;j<val[0].length-1;j++)
                {
                    let yaxis = [i,i+1];
                    let xaxis = [j,j+1];
                    if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,3)==true)
                    {
                        //onsole.log("found non unique square");
                        setAllVisited(yaxis,xaxis,3);
                        cnt++;

                    }
                }
            }
            return cnt;
    }
 }
 function reversesquare(p)
 {
    if(p==1)
    {
        for(let i=val.length-1;i>=1;i--)
            {
                for(let j=val[0].length-1;j>=1;j--)
                {
                    let yaxis = [i-1,i];
                    let xaxis = [j-1,j];
                    if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,0)==true)
                    {
                        //onsole.log("found non unique square");
                        setAllVisited(yaxis,xaxis,0);
                        drw(((i-1)*val[0].length)+j-1,yaxis,xaxis); colorInd++;
                    }
                }
            }
    }
    else if(p==2)
    {
        for(let i=val.length-1;i>=1;i--)
            {
                for(let j=val[0].length-1;j>=1;j--)
                {
                    let yaxis = [i-1,i];
                    let xaxis = [j-1,j];
                    
                        setUnvisited(yaxis,xaxis,3);
                        
                    
                }
            }
    }
    else if(p==3)
    {
        let cnt = 0;
        for(let i=val.length-1;i>=1;i--)
            {
                for(let j=val[0].length-1;j>=1;j--)
                {
                    let yaxis = [i-1,i];
                    let xaxis = [j-1,j];
                    if(allOne(yaxis,xaxis)==true && notAllVisited(yaxis,xaxis,3)==true)
                    {
                        //onsole.log("found non unique square");
                        setAllVisited(yaxis,xaxis,3);
                        cnt++;

                    }
                }
            }
            return cnt;
    }
 }
 
  function allOne(n, m)
 {
    
    for(let i = n[0];i<=n[1];i++)
    {
        for(let j = m[0] ; j<=m[1]; j++)
        {
            if(val[i][j] == 0)
                return false;
        }
    }
    return true;
 }
 function drw(pos,h,w)
 {
    let el = document.createElement('div');   
    let rect1 = par[0].getBoundingClientRect();
    let hh = h[1]-h[0]; if(hh<0) hh= hh*(-1);
    let ww = w[1]-w[0]; if(ww<0) ww = ww*(-1);

    el.style.height = (rect1.height*(hh+1)-100) + "px"; // Adjusted height with -10 pixels
                el.style.width =  ((rect1.width*(ww+1))-80) + "px";// Adjusted width with -10 pixels
                
                el.style.borderRadius = "12px";
                el.style.left="35px";
                el.style.border = "5px solid " + borderArr[colorInd];//border color working
                //el.style.borderBlockColor = borderArr[1];
                el.style.position = "absolute";
                el.style.zIndex = "1";
                el.style.top= "45px";
                el.style.backgroundColor = arr[colorInd];//color array;
                //el.style.borderBottom = "none"; to remove border of any side
                el.setAttribute('id','ch');
                par[pos].appendChild(el);
 }


function createBox()
{
    solved = false;
    let nl = document.createElement('button');
                nl.style.height = "50%";
                nl.style.width = "25%";
                nl.style.backgroundColor = "white";
                nl.style.innerHTML = "1";
                nl.style.border = "2px solid #efefef";
                nl.style.position = "relative";
                nl.style.padding = "10px";
                nl.style.fontSize =  "24px";
                nl.setAttribute('id','box');
                nl.addEventListener('mouseover',()=>{
                    nl.style.backgroundColor = "#efefef";
                    nl.style.cursor = "pointer";
                })
                nl.addEventListener('mouseout',()=>{
                    nl.style.backgroundColor = "";
                    
                })
                
                let buttChild = document.createElement('div');
                buttChild.setAttribute('id','num');
                buttChild.style.position = "absolute";
                buttChild.style.height="100%";
                buttChild.style.width="100%";
                buttChild.display = "flex";
                buttChild.innerHTML= 0;
                buttChild.style.zIndex = 2;
                buttChild.addEventListener('click',()=>{
                    if(buttChild.innerHTML==1)buttChild.innerHTML=0;
                    else buttChild.innerHTML=1;
                    num = document.querySelectorAll("#num");
                    solved = false;
                    val = [];
                    visited = new Set();
                    const elements = document.querySelectorAll('#ch');
            elements.forEach(function(element) {
            element.parentNode.removeChild(element);
         })
            // auto re-run solver after value change
            butt.click();
                })
                nl.appendChild(buttChild);


                outer.append(nl);
                par  = document.querySelectorAll("#box");
                num = document.querySelectorAll("#num");
}
Var2.addEventListener('mouseover',()=>{
    Var2.style.backgroundColor = "hsla(204, 81%, 72%, 0.4)";
    Var2.style.cursor = "pointer";
    
})
Var2.addEventListener('mouseout',()=>{
        Var2.style.backgroundColor = "";
    })
    Var.addEventListener('mouseover',()=>{
        Var.style.backgroundColor = "hsla(204, 81%, 72%, 0.4)";
        Var.style.cursor = "pointer";
        
    })
    Var.addEventListener('mouseout',()=>{
            Var.style.backgroundColor = "";
        })
        Var4.addEventListener('mouseover',()=>{
            Var4.style.backgroundColor = "hsla(204, 81%, 72%, 0.4)";
            Var4.style.cursor = "pointer";
            
        })
        Var4.addEventListener('mouseout',()=>{
                Var4.style.backgroundColor = "";
            })
 butt.addEventListener('mouseover',()=>{
    butt.style.backgroundColor = "hsla(204, 81%, 72%, 0.2)";
    butt.style.cursor = "pointer";
 })
 butt.addEventListener('mouseout',()=>{
    butt.style.backgroundColor = "";
 })
 par.forEach(box=>{
    box.addEventListener('mouseover',()=>{
        box.style.backgroundColor = "#efefef";
        box.style.cursor = "pointer";
    })
 })
 par.forEach(box=>{
    box.addEventListener('mouseout',()=>{
        box.style.backgroundColor = "";
        
    })
 })




 

