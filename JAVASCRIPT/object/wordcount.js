var stmt="hai hello hai hello";
var words=stmt.split(" ");

// hai:2
// hello:2
var word_count={}
for(let word of words)
{
    if(word in word_count)
    {
        word_count[word]+=1;
    }
    else{
        word_count[word]=1;
    }

}
console.log(word_count);
