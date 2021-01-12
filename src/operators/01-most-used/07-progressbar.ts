import {fromEvent} from "rxjs";
import {map} from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus quis est at vestibulum. Aliquam viverra vel ligula non fringilla. Cras pharetra ante id efficitur maximus. Duis dui sem, ullamcorper ut dapibus id, ullamcorper in elit. Sed vulputate tempor mauris, id hendrerit mauris dictum pharetra. Quisque ligula diam, blandit in auctor nec, ornare et odio. Aenean consectetur elit vitae aliquet interdum. Nullam tempus condimentum lacinia. Sed magna leo, pulvinar eget volutpat eget, tempus ut sapien.
<br/><br/>
Maecenas felis diam, sollicitudin eget est et, pulvinar sagittis felis. Nam eu tincidunt urna. Duis lectus risus, eleifend sed dui condimentum, aliquam molestie lorem. Sed nec neque in tellus accumsan imperdiet. Nullam ligula dolor, elementum id egestas eget, auctor iaculis enim. In egestas dui eget magna vestibulum, a condimentum urna pellentesque. Quisque consequat arcu consectetur lorem sollicitudin, et porttitor nunc ultrices. Duis bibendum erat eget euismod venenatis. Pellentesque egestas vel tellus ut gravida. Fusce eget tincidunt ante.
<br/><br/>
Aliquam consequat mi odio. Donec elementum vitae est ultrices sodales. Duis eu pulvinar nisl. Suspendisse maximus vestibulum erat, at rhoncus augue maximus quis. Pellentesque sapien massa, eleifend ac massa bibendum, consectetur cursus mi. Morbi metus ligula, tempus sed dapibus non, dapibus quis dolor. Donec non urna massa. Sed dictum arcu vel pulvinar consequat. Fusce luctus dolor non ornare viverra. In blandit velit non ex condimentum, a dapibus est efficitur. Proin dictum commodo sem.
<br/><br/>
In hac habitasse platea dictumst. Aliquam ut lobortis sem, quis mollis augue. Vivamus iaculis laoreet malesuada. Integer neque lectus, cursus quis mi ut, aliquam interdum est. Vestibulum ante massa, maximus quis metus ut, vehicula finibus leo. Duis id sem orci. Morbi sed est ultricies, feugiat risus vel, eleifend nibh. Quisque tempus quam ac semper vulputate. Nulla imperdiet consectetur dictum. Morbi commodo ac tortor nec condimentum. Suspendisse aliquet hendrerit ex non fringilla.
<br/><br/>
Proin sodales eleifend ex dignissim bibendum. Morbi eget venenatis augue. Maecenas quis dui convallis arcu lacinia suscipit. Nulla eu dignissim elit, consequat sagittis orci. Quisque in diam sapien. Nunc in libero vitae odio sollicitudin tristique nec ut tortor. Fusce urna felis, hendrerit at mi ut, fringilla rutrum mi. Proin tempor purus vitae turpis maximus iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam tempor mauris feugiat laoreet gravida.
<br/><br/>
Suspendisse potenti. Etiam non ante dolor. Sed enim lacus, laoreet ut leo sed, iaculis scelerisque erat. Mauris sollicitudin euismod imperdiet. Duis a venenatis nisl. Phasellus commodo quam sem, vitae luctus orci viverra a. Vivamus bibendum porta felis vel scelerisque. Praesent tristique imperdiet neque, molestie aliquet risus pulvinar sed. Nam est libero, rutrum eget ullamcorper ut, vestibulum ac justo. Etiam ornare justo et erat dignissim dignissim. Curabitur turpis ante, sollicitudin nec dapibus nec, ornare ac velit. Sed faucibus, arcu at porttitor faucibus, erat est euismod lectus, et gravida orci nisl vel velit. Fusce eget dapibus tellus.
<br/><br/>
Nulla maximus velit a condimentum porttitor. Nunc diam sem, congue quis consectetur eu, scelerisque ut risus. Sed pharetra mollis quam quis vestibulum. Vivamus ac ultrices leo, a tempus purus. Nulla nec ligula at dolor rutrum blandit. Nulla dignissim pellentesque aliquam. Duis rutrum consectetur tempor. Ut porta, risus nec venenatis malesuada, ligula odio luctus tortor, et sagittis mauris metus eget lectus. Integer eget quam et nisl rutrum pulvinar a vitae ligula. Duis vehicula dictum mauris nec semper.
<br/><br/>
Nulla ante eros, venenatis ac interdum sed, bibendum in libero. Nulla velit elit, aliquet at ex et, posuere volutpat lectus. Cras finibus fringilla fermentum. Nullam tellus lectus, tempor sed finibus vulputate, ornare in leo. Nunc facilisis elit facilisis mollis accumsan. Nullam sed nisl enim. Cras id nunc odio. Nam malesuada magna sapien, vel volutpat neque tempor vel. Nulla mauris nisi, volutpat non urna nec, vestibulum interdum lacus. Maecenas convallis ullamcorper odio non ornare. Praesent consequat luctus auctor.
<br/><br/>
Mauris eu semper libero. Quisque elementum at est ut cursus. Suspendisse placerat ultrices erat quis rhoncus. Maecenas et facilisis risus. Nam ultricies est a mi ultrices rutrum. Fusce auctor magna nec sem tempus consequat. Sed dapibus leo a gravida venenatis. Aliquam erat volutpat. Nam vel mi vel tortor auctor interdum ut vitae mi. Aenean mollis nisl lacus, sed feugiat neque euismod porttitor. Donec cursus felis vel massa lacinia, id interdum neque gravida. Praesent commodo hendrerit neque ut dictum. Quisque convallis vestibulum ante, eu vulputate lacus dictum mollis. Vivamus eu velit pulvinar, venenatis ligula ac, blandit tortor. Aenean non nisl fermentum, ullamcorper odio non, faucibus tortor.
<br/><br/>
Nullam ut orci ligula. Cras arcu ex, mollis et erat sed, interdum lacinia enim. Donec ultricies et orci eu consectetur. Nullam sagittis libero sed convallis sagittis. Integer tincidunt, nisi sed sagittis elementum, magna arcu posuere nunc, sed malesuada nisi augue quis libero. Cras sagittis risus non nisl volutpat, quis hendrerit massa egestas. Curabitur semper tellus et ex lacinia suscipit. Phasellus non ipsum sed turpis fermentum mollis. Curabitur eleifend, mi ullamcorper faucibus egestas, tortor velit interdum lectus, eu tempus justo nisl ut quam. Cras vel orci sed elit volutpat porttitor. Sed commodo turpis ut leo varius dictum. Cras id ornare eros.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const scroll$ = fromEvent(document, 'scroll');

const scrollCalc = (event) => {
    const {
        clientHeight,
        scrollHeight,
        scrollTop
    } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const progress$ = scroll$.pipe(
    map(event => scrollCalc(event))
);

progress$.subscribe(percentage => {
    progressBar.style.width = `${percentage}%`;
});
