const getData = el => ({
  s: el.r.baseVal.value * 2,
  x: el.cx.baseVal.value,
  y: el.cy.baseVal.value });


const $base = document.querySelector('#base');
const base = getData($base);

const getFromObj = elData => ({
  transformOrigin: 'center',
  x: base.x - elData.x,
  y: base.y - elData.y,
  scale: base.s / elData.s });


const tl = new TimelineMax({
  repeat: -1,
  yoyo: true });


tl.from('#all', 2, {
  opacity: 0,
  ease: Expo.easeInOut },
0);

tl.from('#all', 3, {
  transformOrigin: 'center',
  rotation: 360,
  scale: .5,
  ease: Expo.easeInOut },
0);

const elements = [
'#bottom',
'#middle',
'#top',
'#big-left',
'#big-right',
'#biggest-left',
'#biggest-right'];


elements
// .reverse()
.forEach((el, i) => {
  el = document.querySelector(el);
  tl.from(el, 3, {
    ...getFromObj(getData(el)),
    ease: Expo.easeInOut },
  i === 0 ? 0 : '-=2.8');
});

tl.from('#signet', 3, {
  opacity: 0,
  ease: Power2.easeInOut },
'-=2');

tl.staggerTo('circle', 1, {
  opacity: 0,
  ease: Power4.easeOut },
-.1, '-=1');