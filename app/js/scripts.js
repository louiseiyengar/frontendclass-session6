 document.addEventListener('click', decide, false);

var betaContent = `
<h2>In Beta</h2>
<p>Information about the beta program.<p>
`

var pickitContent = `
<h2>Pick It is coming soon!</h2>
<p>We will show you how to get the freshest ingredients for our recipes.<p>
`

var cookitContent = `
<h2>Cook It is coming soon!</h2>
<p>We will show you the <strong>very</strong> best ways to cook our recipes.<p>
`

var storeitContent = `
<h2>Store It is coming soon!</h2>
<p>We will show you how to preseve our recipes so they taste fresher longer.<p>
`

var closePop = `
<div class="closer" href="#0">
<div class="closex">✖︎</div>
</div>
`

function decide() {
    if (event.target.matches('.beta')) {
        makePopover(betaContent); 
    } else if (event.target.matches('.it')) {
        var whichButton = event.target.parentElement.className;
        if (whichButton == 'nav-pickit') {
            makePopover(pickitContent);
        } else if (whichButton == 'nav-cookit' ) {
            makePopover(cookitContent);
        } else {
            makePopover(storeitContent);
        }
    } else if (event.target.matches('.closex')) {
        destroyPopover()
    }
}

function makePopover(content) { 
    if (document.querySelector('.betainfo')) {
        destroyPopover();
    }
    var popover = document.createElement('div');
    popover.classList.add('betainfo');
  
    popover.innerHTML = content + closePop; 
    document.querySelector('body').append(popover);
  
    function destroyPopover() {
      document.querySelector('.betainfo').remove();
      event.preventDefault()
    }
  }

function destroyPopover() {
    event.preventDefault()
    var targetElem = document.querySelector('.betainfo')
    targetElem.remove();
}
