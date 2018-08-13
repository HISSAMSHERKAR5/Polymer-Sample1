export const isbnURL1="https://d1re4mvb3lawey.cloudfront.net/pg1017/index.json";
export const isbnURL="/data/pg1017.json";
export  function getISBN_URL(isbn){    
    if(isbn!=null && isbn!=undefined)
      return "/data"+isbn+".json";//"https://d1re4mvb3lawey.cloudfront.net/"+isbn+"/index.json";//CORS issue
      return null;
}

