function updateCalendar(){
    const now= new Date();
    const day=now.getDate();
    const year=now.getFullYear();
    const monthNames=["jaunuary","february","march","april","may","june","july","august","september","october","november","december"]
    const month=monthNames[now.getMonth()];

    document.getElementById('day').textContent=day;
    document.getElementById('month').textContent=month + ",";
    document.getElementById('year').textContent=year;

}

updateCalendar();