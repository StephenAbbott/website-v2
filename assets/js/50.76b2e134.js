(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{295:function(t,a,s){"use strict";s.r(a);var e=s(0),o=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Tabular data (e.g. data stored in "),s("router-link",{attrs:{to:"/docs/csv/"}},[t._v("CSV")]),t._v(" and Excel worksheets) is one of the most common forms of data available on the web. This guide will walk through validating tabular data using Frictionless Data software.")],1),t._v(" "),s("p",[t._v("This guide show how you can validate your tabular data and check both:")]),t._v(" "),s("ul",[s("li",[t._v("Structure: are there too many rows or columns in some places?")]),t._v(" "),s("li",[t._v("Schema: does the data fit its schema. Are the values in the date column actually dates? Are all the numbers greater than zero?")])]),t._v(" "),s("p",[t._v("We will walk through two methods of performing validation:")]),t._v(" "),s("ul",[s("li",[t._v("Web service: an online service called "),s("strong",[t._v("goodtables")]),t._v(". This option requires no technical knowledge or expertise.")]),t._v(" "),s("li",[t._v("Using the "),s("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python goodtables library"),s("OutboundLink")],1),t._v(". This allows you full control over the validation process but requires knowledge of Python.")])]),t._v(" "),s("h2",{attrs:{id:"goodtables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goodtables"}},[t._v("#")]),t._v(" goodtables")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://goodtables.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("goodtables"),s("OutboundLink")],1),t._v(" is a free, open-source, hosted"),s("br"),t._v("\nservice for validating tabular data. goodtables checks your data for"),s("br"),t._v("\nits "),s("em",[t._v("structure")]),t._v(", and, optionally, its adherence to a specified "),s("em",[t._v("schema")]),t._v(". Where the latter fails, goodtables highlights content errors so you can fix them speedily.")]),t._v(" "),s("p",[t._v("!! goodtables will give quick and simple feedback on where your tabular"),s("br"),t._v("\ndata may not yet be quite perfect.")]),t._v(" "),s("p",[s("img",{attrs:{src:"goodtables-screenshot.png",alt:"goodtables screenshot"}})]),t._v(" "),s("p",[t._v("To get started with one-off validation of your tabular datasets, use "),s("a",{attrs:{href:"http://try.goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("try.goodtables.io"),s("OutboundLink")],1),t._v(". All you need to do is upload or provide a link to a CSV"),s("br"),t._v("\nfile and hit the “Validate” button.")]),t._v(" "),s("p",[s("img",{attrs:{src:"goodtables-provide-data.png",alt:"goodtables Provide URL"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"goodtables-validate.png",alt:"goodtables Validate button"}})]),t._v(" "),s("p",[t._v("If your data is structurally valid, you should receive the following"),s("br"),t._v("\nresult:")]),t._v(" "),s("p",[s("img",{attrs:{src:"goodtables-valid.png",alt:"goodtables Valid"}})]),t._v(" "),s("p",[t._v("If not…")]),t._v(" "),s("p",[s("img",{attrs:{src:"goodtables-invalid.png",alt:"goodtables Invalid"}})]),t._v(" "),s("p",[t._v("The report should highlight the structural issues found in your data"),s("br"),t._v("\nfor correction.  For instance, a poorly structured tabular dataset may"),s("br"),t._v("\nconsist of a header row with too many (or too few) columns when"),s("br"),t._v("\ncompared to of data rows with an equal amount of columns.")]),t._v(" "),s("p",[t._v("You can also provide a schema for your tabular data defined using JSON"),s("br"),t._v("\nTable Schema.")]),t._v(" "),s("p",[s("img",{attrs:{src:"goodtables-provide-schema.png",alt:"goodtables Provide Schema"}})]),t._v(" "),s("p",[t._v("Briefly, the format allows users to specify not only"),s("br"),t._v("\nthe types of information within each column in a tabular dataset, but"),s("br"),t._v("\nalso expected values.  For more information, see the"),s("br"),t._v(" "),s("router-link",{attrs:{to:"/docs/table-schema/"}},[t._v("Table Schema guide")]),t._v(" or"),s("br"),t._v(" "),s("router-link",{attrs:{to:"/specs/table-schema/"}},[t._v("the full standard")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"python-goodtables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-goodtables"}},[t._v("#")]),t._v(" Python + goodtables")]),t._v(" "),s("p",[t._v("goodtables is also available as a Python library.  The following short"),s("br"),t._v("\nsnippets demonstrate examples of loading and validating data in a file"),s("br"),t._v("\ncalled "),s("code",[t._v("data.csv")]),t._v("(and in the second example, validating the same data file against "),s("code",[t._v("schema.json")]),t._v(")")]),t._v(" "),s("h3",{attrs:{id:"validating-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validating-structure"}},[t._v("#")]),t._v(" Validating Structure")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" goodtables "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" validate\n\nreport "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" validate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nreport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'valid'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nreport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table-count'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nreport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error-count'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nreport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tables'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'valid'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nreport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tables'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'source'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nreport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tables'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'errors'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'code'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"validating-schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validating-schema"}},[t._v("#")]),t._v(" Validating Schema")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" goodtables "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" validate\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sync source/schema fields order")]),t._v("\nreport "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" validate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'schema.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" order_fields"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("h2",{attrs:{id:"continuous-data-validation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#continuous-data-validation"}},[t._v("#")]),t._v(" Continuous Data Validation")]),t._v(" "),s("p",[t._v("In a bid to streamline the process of data validation and ensure seamless integration is possible in different publishing workflows, we have set up a continuous data validation hosted service that builds on top of Frictionless Data libraries. "),s("a",{attrs:{href:"http://goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("goodtables.io"),s("OutboundLink")],1),t._v(" provides support for different backends. At this time, users can use it to check any datasets hosted on GitHub and Amazon S3 buckets, automatically running validation against data files every time they are updated, and providing a user friendly report of any issues found.")]),t._v(" "),s("p",[s("img",{attrs:{src:"goodtables-continuous-validation.png",alt:"Data Valid"}})]),t._v(" "),s("p",[t._v("Start your continuous data validation here: "),s("a",{attrs:{href:"https://goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://goodtables.io"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Blog post on goodtables python library and goodtables web service: "),s("a",{attrs:{href:"http://okfnlabs.org/blog/2017/05/22/introducing-the-new-goodtables-library-and-goodtablesio.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://okfnlabs.org/blog/2017/05/22/introducing-the-new-goodtables-library-and-goodtablesio.html"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("See the "),s("code",[t._v("README.md")]),t._v(" for more information.")]),t._v(" "),s("p",[t._v("!! Find more examples on validating tabular data in the "),s("a",{attrs:{href:"/field-guide"}},[t._v("Frictionless Data Field Guide")])])])}),[],!1,null,null,null);a.default=o.exports}}]);