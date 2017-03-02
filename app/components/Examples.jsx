var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
		return (
          <div className="examples-page">
             <h1 className="text-center page-title">Examples</h1> 
             <p>Here are a few example locations to try out:</p>
             <ol>
               <li>
                 <Link to='/?location=Boston'>Boston, MA</Link>
               </li>
               <li>
                 <Link to='/?location=Pittsburgh'>Pittsburgh, PA</Link>
               </li>
               <li>
                 <Link to='/?location=Miami'>Miami, FL</Link>
               </li>
               <li>
                 <Link to='/?location=New%20York'>New York, NY</Link>
               </li>
               <li>
                 <Link to='/?location=Chicago'>Chicago, IL</Link>
               </li>
               <li>
                 <Link to='/?location=Kumertau'>Kumertau, Russia</Link>
               </li>
             </ol> 
          </div>
		);
};

module.exports = Examples;