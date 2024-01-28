import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


import Rellax from 'rellax';
const rellax = new Rellax('.rellax', {
  center: true,
});


const teamTableBody = document.querySelector('.team-sec__table tbody')
const teamTableTr = document.querySelectorAll('.team-sec__table tr')
const teamTableBtn = document.querySelector('.team-sec__table-mob')
if(teamTableBody){
  if(window.matchMedia('(max-width:  768px').matches){
    teamTableBody.style.maxHeight = teamTableTr[0].clientHeight + teamTableTr[1].clientHeight + 'px'

    teamTableBtn.addEventListener('click', e => {
      teamTableBody.style.maxHeight = teamTableBody.scrollHeight + 'px'
      teamTableBtn.remove()
    })
  }
}



const lotosmartItems = document.querySelectorAll('.lotosmart__card')
if(lotosmartItems && lotosmartItems.length > 0 && window.matchMedia('(max-width: 768px)').matches){
  lotosmartItems.forEach(el => {
    el.addEventListener('click', e => {
      const content = el.querySelector('.lotosmart__card-content')

      content.classList.toggle('active') ? content.style.maxHeight = content.scrollHeight + 'px' : content.style.maxHeight = null
    })
  })
}
