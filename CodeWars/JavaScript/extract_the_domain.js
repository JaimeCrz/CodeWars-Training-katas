// Extract the domain name from a URL (codewars)


// Solition that works in Code wars.
function domainName(url){

  const siteName  = url.replace(/.+\/\/|www.|\..+/g, '')
  
  return siteName
  }


//Solution that works in the console, as code wars cannot use constructor URL

function domainName(url){

  const siteName = new URL(url)
  
  const onlyName = siteName.hostname.split("").reverse().join("")
  onlyName = onlyName.split(".").pop();
  
  const nameDomain = onlyName.split("").reverse().join("")
  
  return nameDomain

  }

// Commets: Good kata for training JS regex.