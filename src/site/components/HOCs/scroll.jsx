import React from 'react'

export function withScroll (WrappedComponent, handle) {
  const srollHandle = (evt) => {
    evt.preventDefault()
    let [scrollTop, documentHeight, windowHeight] = [
      document.documentElement.scrollTop || document.body.scrollTop,
      document.body.clientHeight,
      window.screen.height
    ]

    if (scrollTop + windowHeight >= documentHeight - 100) {
      handle()
    }
  }
  return class extends React.Component {
  	constructor (props) {
  		super(props)
  	}

    componentDidMount () {
      window.addEventListener('scroll', srollHandle)
    }

    componentWillUnmount () {
      window.removeEventListener('scroll', srollHandle)
    }

    render () {
    	return <WrappedComponent {...this.props}/>
    }
  }
}
