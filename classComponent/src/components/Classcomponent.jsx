import React from "react";
class Classcomponent extends React.Component {
  
  render() { 
    return ( 
      <div>
      <h1> Create Class Components in simple 4 steps:</h1>
      <ol>
        <li>
          Import React
          <ul>
            <li>import react from 'react';</li>
          </ul>
        </li>
        <li>
          Create Javescript class which extends from React.Component and create render methond which return <b>JSX</b>
          <ul>
            <li>
              <pre>
                <code>
                  <span>Class Header extends React.Component</span>
                  <span>&#123;</span>
                  <br />
                  <span>render()&#123;</span><br/>
                  <span>return (</span>
                  <br />
                  <span>
                    &lt;h1&gt; This class Header Component.&lt;/h1&gt;
                  </span>
                  <br />
                  <span>)</span><br/>
                  <span>&#125;</span><br/>
                  <span>&#125;</span>
                </code>
              </pre>
            </li>
          </ul>
        </li>
        <li>
          Export class Header
          <ul>
            <li>export default Header</li>
          </ul>
        </li>
      </ol>
      <h3>Conclusion:</h3>
      <pre>
        <code>
          <p>import react from 'react';</p>
          <span>Class Header extends React.Component</span>
          <span>&#123;</span>
                  <br />
                  <span>render()&#123;</span><br/>
                  <span>return (</span>
                  <br />
                  <span>
                    &lt;h1&gt; This class Header Component.&lt;/h1&gt;
                  </span>
                  <br />
                  <span>)</span><br/>
                  <span>&#125;</span><br/>
                  <span>&#125;</span>
          <p>export default Header;</p>
        </code>
      </pre>
    </div>
     );
  }
}
 
export default Classcomponent;