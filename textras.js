
function wordCap(str) {
    if(!str) str = this;
    let strings = str.split(' ');
    var o = "";
    strings.forEach(s => {
      o += `${s.slice(0, 1).toUpperCase() + s.slice(1, s.length).toLowerCase()} `;
    })
    return o;
  };
  function removeFromEnd(c) {
    if(!c) c = 1;
    
    return this.slice(0, this.length - c)
  }
  
  function remove(c) {
    if(!c) c = 0
    let array = Array.from(this);
    delete array[c]
    return array.join('');
  }
  
  function pushAfter(index, value) {
    let array = this;
    let out = [];
    let i = -1;
    array.forEach(item => {
      if(i == index) {
        out.push(value)
        out.push(item)
  
      }else{
        out.push(item)
      }
      i++;
    })
    
    return out;
  }
  
  
  function separate(c) {
    if(!c) throw new Error("Usage: String.prototype.separate(char)");
    let array = Array.from(this);
    return array.join(c);
  }
  
  function italic() {
    let itL = Array.from('𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡');
    let regL = Array.from('abcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyz'.toUpperCase())
    let o = this;
    itL.forEach(l => {
      var replace = regL[itL.indexOf(l)];
      var re = new RegExp(replace,"g");
      o = o.replace(re, l)
    })
    return o;
    
  }
  
  function bold() {
    let itL = Array.from('𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭');
    let regL = Array.from('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    let o = this;
    itL.forEach(l => {
      var replace = regL[itL.indexOf(l)];
      var re = new RegExp(replace,"g");
      o = o.replace(re, l)
    })
    return o;
    
  }
  
  function underlined() {
    let itL = Array.from('a͟b͟c͟d͟e͟f͟g͟h͟i͟j͟k͟l͟m͟n͟o͟p͟q͟r͟s͟t͟u͟v͟w͟x͟y͟z͟A͟B͟C͟D͟E͟F͟G͟H͟I͟J͟K͟L͟M͟N͟O͟P͟Q͟R͟S͟T͟U͟V͟W͟X͟Y͟Z͟');
    let regL = Array.from('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    let o = this;
    itL.forEach(l => {
      var replace = regL[itL.indexOf(l)];
      var re = new RegExp(replace,"g");
      o = o.replace(re, l)
    })
    return o;
    
  }


    String.prototype.wordCap = wordCap;
    String.prototype.removeFromEnd = removeFromEnd;
    String.prototype.remove = remove;
    String.prototype.separate = separate;
    Array.prototype.pushAfter = pushAfter;
    String.prototype.italic = italic;
    String.prototype.bold = bold;


  