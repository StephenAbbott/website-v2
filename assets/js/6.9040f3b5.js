(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{227:function(e,t,a){e.exports=a.p+"assets/img/openml-dashboard-intro.4d6e718b.png"},228:function(e,t,a){e.exports=a.p+"assets/img/openml-upload-data.79f2aa75.png"},229:function(e,t,a){e.exports=a.p+"assets/img/openml-dataset-list.9aa35113.png"},230:function(e,t,a){e.exports=a.p+"assets/img/openml-dataset-overview.14685b05.png"},280:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[o("a",{attrs:{href:"http://openml.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenML"),o("OutboundLink")],1),e._v(" is an online platform and service for machine learning, whose goal is to make machine learning and data analysis simple, accessible, collaborative and open with an optimal division of labour between computers and humans. People can upload and share data sets and questions (prediction tasks) on OpenML  that they then collaboratively  solve using machine learning algorithms.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.youtube.com/embed/1N3qATxXrpE",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:a(227),alt:""}}),o("OutboundLink")],1),o("br"),e._v(" "),o("em",[e._v("A brief introduction to openML")])]),e._v(" "),o("p",[e._v("We offer "),o("a",{attrs:{href:"https://www.openml.org/guide/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("open source tools"),o("OutboundLink")],1),e._v(" to download data into your "),o("a",{attrs:{href:"https://www.openml.org/guide/integrations",target:"_blank",rel:"noopener noreferrer"}},[e._v("favorite machine learning environments"),o("OutboundLink")],1),e._v(" and work with it. You can then upload your results back onto the platform so that others can learn from you. If you have data, you can use OpenML to get insights on what machine learning method works well to answer your question. Machine Learners can use OpenML to find interesting data sets and questions that are relevant for others and also for machine learning research (e.g. learning how algorithms behave on different types of data sets).")]),e._v(" "),o("p",[e._v("Users typically store their data in all kinds of formats, which makes it hard to simplify the data upload process on OpenML. Currently we only allow data in ARFF format. We are looking to make it as easy as possible for users to upload data, download and work with data from OpenML while keeping the datasets in machine readable formats and availing metadata in easy to read formats for our users. We also like to avail datasets from other services on OpenML. Most of these external sources currently contain data in varied formats, but some i.e. "),o("a",{attrs:{href:"https://data.world/",target:"_blank",rel:"noopener noreferrer"}},[e._v("data.world"),o("OutboundLink")],1),e._v(" have started adopting and using "),o("router-link",{attrs:{to:"/specs/data-package/"}},[e._v("data packages")]),e._v(". You can read more about data.world’s adoption and use of data packages "),o("router-link",{attrs:{to:"/articles/dataworld/"}},[e._v("here")]),e._v(" and "),o("a",{attrs:{href:"https://meta.data.world/try-this-frictionless-data-world-ad36b6422ceb",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")],1),e._v(" "),o("p",[o("a",{attrs:{href:"https://biteable.com/watch/upload-data-to-openml-1575659/4500a42627a119f548c7cb0ec3ec4a25ee8a576f",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:a(228),alt:""}}),o("OutboundLink")],1),o("br"),e._v(" "),o("em",[e._v("Learn how to upload data on OpenML in 1 minute")])]),e._v(" "),o("p",[e._v("We first heard about the Frictionless Data project through "),o("a",{attrs:{href:"https://schoolofdata.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("School of Data"),o("OutboundLink")],1),e._v(". One of the OpenML core members is also involved in School of Data and used data packages in one of the open data workshops from School of Data Switzerland.  In the coming months, we are looking to adopt "),o("router-link",{attrs:{to:"/specs/"}},[e._v("Frictionless Data specifications")]),e._v(" to improve user friendliness on OpenML. We hope to make it possible for users to upload and connect datasets in "),o("router-link",{attrs:{to:"/specs/data-package/"}},[e._v("data packages format")]),e._v(". This will be a great shift because it would enable people to easily build and share machine learning models trained on any dataset in the frictionless data ecosystem.")],1),e._v(" "),o("p",[e._v("OpenML currently works with tabular data in Attribute Relation File Format ("),o("a",{attrs:{href:"https://weka.wikispaces.com/ARFF+%28stable+version%29",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARFF"),o("OutboundLink")],1),e._v(") accompanied by metadata in an XML or JSON file. It is actually very similar to Frictionless Data’s "),o("router-link",{attrs:{to:"/specs/tabular-data-package/"}},[e._v("tabular data package")]),e._v(" specification, but with ARFF instead of csv.")],1),e._v(" "),o("p",[o("img",{attrs:{src:a(229),alt:""}}),o("br"),e._v(" "),o("em",[e._v("Image of dataset list on OpenML")])]),e._v(" "),o("p",[e._v("ARFF (Attribute-Relation File Format) is a CSV file with a header that  lists the names of the attributes (columns) and their data types. Especially the latter is very important to do data analysis. For instance, say that you have a column with values 1,2,3. It is very important to know whether that is just a number (1,2,3 ice creams), a rank (1st, 2nd, 3rd place), or a category (item 1, item 2, item 3). This is missing from CSV data. ARFF also allows to connect multiple tables together, although we don’t really use this right now.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(230),alt:""}}),o("br"),e._v(" "),o("em",[e._v("Image of a dataset overview on openML")])]),e._v(" "),o("p",[e._v("The metadata is free-form information about the dataset. It is mostly key-value data, although some values are more structured. It is stored in our database and exported to simple JSON or XML. "),o("a",{attrs:{href:"https://www.openml.org/d/2/json",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here’s an example"),o("OutboundLink")],1),e._v(". It covers basic information (textual description of the dataset, owner, format, license, et al) as well as statistics (number of instances, number of features, number of  missing values, details about the data distribution, and results of simple machine learning algorithms run on the data), and summary statistics (mainly used for the quick overview plots).")]),e._v(" "),o("p",[e._v("We firmly believe that  if data packages become the go-to specification for sharing data in scientific communities, accessibility to data that’s currently ‘hidden’ in data platforms and university libraries will improve vastly, and are keen to adopt and use the specification on OpenML in the coming months.")]),e._v(" "),o("p",[e._v("Interested in contributing to our quest to adopt the "),o("router-link",{attrs:{to:"/specs/data-package/"}},[e._v("data package specification")]),e._v(" as an import and export option for data on the OpenML platform? "),o("a",{attrs:{href:"https://github.com/openml/OpenML/issues/482",target:"_blank",rel:"noopener noreferrer"}},[e._v("Start here"),o("OutboundLink")],1),e._v(".")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);