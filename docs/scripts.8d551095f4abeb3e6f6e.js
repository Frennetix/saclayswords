window.onload=function(){const t=document.getElementById("bottom"),n=t.getContext("2d"),o=[],i=window.innerWidth,a=window.innerHeight,e=function(){n.fillStyle="#ffffff",n.fillRect(0,0,i,a),o.forEach(function(t){t()}),requestAnimationFrame(e)},r=function(){let t=0;const o=2*Math.random(),e=Math.random()*i-i/2,r=60*Math.random(),h=10*Math.random(),d=function(t,n){return Math.round(Math.random()*(n||255)+t||0)},f="rgb("+d(30,10)+","+d(80,50)+","+d(40,50)+")";return function(){const d=Math.cos(t/30)*Math.min(t/40,20),u=Math.min(t/5,r),c=Math.min(t/50,h);t+=o,n.save(),n.strokeWidth=1,n.translate(i/2+e,a),n.fillStyle=f,n.beginPath(),n.lineTo(-c,0),n.quadraticCurveTo(-c,-u/2,d,-u),n.quadraticCurveTo(c,-u/2,c,0),n.fill(),n.restore()}};for(var h=0;h<300;h++)o.push(r());t.width=i,t.height=a,e()};