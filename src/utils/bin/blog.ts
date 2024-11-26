import { getBlog,readBlog } from '../../api';

export const blog = async (
  args: string[]): Promise<string> => {


const data = await getBlog(); 
const help = `Usage: blog [arg]
Args:
  - ls: list pined blog.
  - ls -a: list all blog.
  - r: read blog.

Example:
  blog ls # to list pined themes
  blog list -a list all blog
  blog r blogtittle `;

  if (args.length === 0) {
    return help;
  }

  switch (args[0]) {
    case 'ls': {
        let msg='';
      if(args[1]==='-a')
      {
        Object.keys(data["blog"]).forEach(e => {
           
            msg+=`Tittle: ${e} || Date: ${data["blog"][e]["date"]}\n`
          });
      }else{
        data["_metadata"]["topPicked"].forEach(e => {
            
          msg+=`Tittle: ${e} || Date: ${data["blog"][e]["date"]}\n`
          });
      }
      return msg;
    }
    break;
    case 'r': {
      let tittle:string="";
      let i=1;
      while(args[i]!==undefined)//to make string after args[1]
      {
        tittle+=`${args[i]} `
        i++;
      }
      tittle=tittle.trim();
      let result='';
      if(data["blog"][`${tittle}`]!== undefined)
      {
        result+=`${tittle} ${data["blog"][tittle]["date"]}\n\n`
        result+=await readBlog(data["blog"][`${tittle}`].filename)
        return  result;
      }else
      {
        if(args[1]==undefined)
      {
        return `blog r: missing a parameter.
        Example:
        blog r blogtittle
        `;
      }
        return `${args[1]}: No such blog exist.`
      }
      
      
    }
    break;

    default:
      return help;
  }
};


