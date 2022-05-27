//-------------------------------------------------
// NOTE: THIS CODE ARE AS A REMINDER
//       OF HOW I STARTED AND HOW FAR I HAVE COME.
//--------------------------------------------------

function openCart(x) {
  let close = document.getElementById('opencart')
  let txttransform = document.getElementById('opencartitems')
  close.style.visibility = 'visible'
  txttransform.style.transform = 'none'
}

function closeCart(x) {
  let txttransform = document.getElementById('opencartitems')
  let close = document.getElementById('opencart')
  close.style.visibility = 'hidden'
  txttransform.style.transform = 'translateX(0)'
}

function openNav() {
  document.getElementById('mySidebar').style.width = '300px'
  document.getElementById('main').style.marginLeft = '250px'
  document.getElementById('sideBarOverlayId').style.width = '100%'
}

function closeNav() {
  document.getElementById('mySidebar').style.width = '0'
  document.getElementById('main').style.marginLeft = '0'
  document.getElementById('sideBarOverlayId').style.width = '0'
}
