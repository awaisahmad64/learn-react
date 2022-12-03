import React from 'react';

function Functionalcomponent() {
  return (
    <div>
      <h1> Create Functional Components in simple 3 steps:</h1>
      <ol>
        <li>
          Import React
          <ul>
            <li>import react from 'react';</li>
          </ul>
        </li>
        <li>
          Create Javescript Functions which return <b>JSX</b>
          <ul>
            <li>
              <pre>
                <code>
                  <span>function Header()</span>
                  <span>&#123;</span>
                  <br />
                  <span>return (</span>
                  <br />
                  <span>
                    &lt;h1&gt; This functional Header Component.&lt;/h1&gt;
                  </span>
                  <br />
                  <span>)</span>
                  <span>&#125;</span>
                </code>
              </pre>
            </li>
          </ul>
        </li>
        <li>
          Export Function
          <ul>
            <li>export default Header</li>
          </ul>
        </li>
      </ol>
      <h3>Conclusion:</h3>
      <pre>
        <code>
          <p>import react from 'react';</p>
          <span>function Header()</span>
          <span>&#123;</span>
          <br />
          <span>return (</span>
          <br />
          <span>&lt;h1&gt; This functional Header Component.&lt;/h1&gt;</span>
          <br />
          <span>)</span>
          <span>&#125;</span>
          <p>export default Header;</p>
        </code>
      </pre>
    </div>
  );
}

export default Functionalcomponent;
