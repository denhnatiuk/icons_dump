if(props.hasOwnProperty("name")){
    const n = document.createElementNS("http://www.w3.org/2000/svg", props.name);
    delete props.name;
    if(props.hasOwnProperty("xlink:href")){
       n.setAttributeNS(null,'xmlns:xlink', 'xmlns:xlink="http://www.w3.org/1999/xlink');
    }
    for (var p in props){
      // if (p === "name"){return}
      if (p === "children"){
        var c = props.children;
        // console.log(c);
        // console.log(props.children instanceof Array);
        if (c instanceof Array){
          for(var j=0; j<c.length; j++){
            // console.log(c[j]);
            n.appendChild(getSVG(c[j]));
          }
        } else if (c instanceof Object){
            // console.log(c);
            n.appendChild(getSVG(c));
        }
      } else {
        if (p === 'xlink'){
          p = 'xlink:href';
          // console.log(p);
          n.setAttributeNS('xmlns:xlink="http://www.w3.org/1999/xlink', p.replace(/[A-Z][0-9]/g, function(m, p, o, s) { return "-" + m.toLowerCase(); }), props[p]);
        } else {
        n.setAttributeNS(null, p.replace(/[A-Z][0-9]/g, function(m, p, o, s) { return "-" + m.toLowerCase(); }), props[p]);
        }
      }
    }
    return n
  }
