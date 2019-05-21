let search_history = [
  "how much does a js dev earn?",
  "chisinau pizza",
  "reactjs tutorials",
  "angular vs react",
  "zelinski is prezident"
]
let input = document.querySelector('input')
   input.addEventListener('click',show_history)
   let form = document.querySelector('form')
    form.addEventListener('submit',save_history)

function save_history(e) {
    search_history.unshift(input.value)
    e.preventDefault()
}
function show_history() {

  var div = document.querySelector('.dropdown-menu')
   $(div).empty()

  for(let i in search_history){
let v = document.createElement('a')

    v.innerHTML = '<span onclick="remove(event)">x</span>' + search_history[i]
    if(search_history.length - i == 3){
      v.style.opacity = 0.8

    }
     if(search_history.length - i == 2){
      v.style.opacity = 0.6
    }
     if(search_history.length - i == 1){
      v.style.opacity = 0.4
    }
    v.className = 'dropdown-item'
    v.addEventListener('click',select)
    div.appendChild(v)
  }

}
show_history()
function select(e) {
  input.value = e.target.innerHTML
}
