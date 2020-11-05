let timeoutId;
function time(fn,delay)
{
    
        
        clearTimeout(timeoutId);
        
        timeoutId=setTimeout(()=>{
            fn();
        },delay)
}
const debounce = (fn,delay)=>
{
    
    return time(fn,delay);
    

}
function func()
{
    inp=document.getElementById("in");
    inp.addEventListener("oninput",debounce((e)=>{
        
        
    text=inp.value;
    fetch("https://api.github.com/search/users?q="+text).then((res)=> res.json()).then((data)=>{
        //console.log(data);
        c=0;
        count=document.getElementById("result_count");
        if(count.hasChildNodes())
        {
            count.removeChild(count.childNodes[0]);
        }
        parent=document.getElementById("result");
        if(parent.hasChildNodes())
        {
            parent.removeChild(parent.childNodes[0]);
        }
        header1=document.createElement("h2");
        if(data.total_count!=undefined)
        {
            c=data.total_count;
            header1.innerHTML=c+" results found ";
            count.appendChild(header1);
            count.classList.add("count");
            child=document.createElement("div");
            child.classList.add("flexc");
            parent.appendChild(child);
            data.items.forEach(item=>{
                node=document.createElement("div");
                first=document.createElement("div");
                second=document.createElement("div");
                p=document.createElement("h3");
                p.innerHTML=item.login;
                p.classList.add("justify");
                second.appendChild(p);
                second.classList.add("name");
                img=document.createElement("img");
                img.src=item.avatar_url;
                first.appendChild(img);
                node.appendChild(first);
                node.appendChild(second);
                node.classList.add("border");
                child.appendChild(node);
            })
        }
    }).catch(e=>{
        console.log(e);
    })},1000));

    
    
            
    
    
}
