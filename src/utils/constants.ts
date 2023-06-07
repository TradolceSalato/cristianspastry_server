


class Constants {
 
  static appTitle : String = "Cristian's pastry admin";
  
  static navigation = (current:boolean) => [
        {key : 'home', name: 'Home', href: '/', current: current, },
        {key: 'aggiungiricetta', name: 'aggiungi ricetta', href: '/addrecipe', current: current },
        {key:'ricette', name: 'ricette', href: '/ricette', current: current },
        {key:'calendar', name: 'Calendar', href: '#', current: current },
 ]

}

export default Constants;