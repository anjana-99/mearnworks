var point_table=[
    {t_name:"csk",pld:10,won:8,loss:2,pts:16},
    {t_name:"dc",pld:11,won:8,loss:3,pts:16},
    {t_name:"rcb",pld:11,won:7,loss:4,pts:14},
    {t_name:"kkr",pld:11,won:5,loss:6,pts:10},
    {t_name:"mi",pld:11,won:5,loss:6,pts:10},
    {t_name:"pkb",pld:11,won:4,loss:7,pts:8},
    {t_name:"rr",pld:11,won:4,loss:7,pts:8},
    {t_name:"srh",pld:10,won:2,loss:8,pts:4}
]

// number of teams playing ipl
console.log(point_table.length);

// name of teams
var team=point_table.map(item=>item.t_name).forEach(name=>console.log(name));

// teams whose points greater than 10
var t_details=point_table.filter(item=>item.pts>10).forEach(name=>console.log(name));

// is kkr playing ipl
var t_playing=point_table.some(item=>item.t_name=='kkr') //boolean value will return
console.log(t_playing);

//sort team wrt to loss descending
var teams=point_table.sort((item1,item2)=>(item2.loss-item1.loss));
console.log(teams);

//team with maximum point
var t_max=point_table.reduce((item1,item2)=>item1.pts>item2.pts?item1:item2)
console.log(t_max);

var w_count={}
for(let team of point_table)
{
    if(team.won in w_count)
    {
        w_count[team.won].push(team.t_name)
    }
    else
    {
        w_count[team.won]=[team.t_name];
    }
}
console.log(w_count);

// map wrt points
var pts_count={}
for(let team of point_table)
{
    if(team.pts in pts_count)
    {
        pts_count[team.pts].push(team.t_name)
    }
    else
    {
        pts_count[team.pts]=[team.t_name];
    }
}
console.log(pts_count);