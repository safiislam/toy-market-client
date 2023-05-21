

const Blog = () => {
    return (
        <div className="h-screen mx-3 md:mx-32">
            <div>
                <p className="text-xl" > Q: What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p>1.Access Token:
                    An access token is a credential that is issued by an authentication server after a user successfully authenticates and authorizes their identity. It is a short-lived token that grants permission to access specific resources or perform certain actions. The access token is typically included in the headers of API requests to authenticate the user and authorize access to protected endpoints.
                    <br />
                    2.Refresh Token:
                    A refresh token is a long-lived token that is also issued by the authentication server along with the access token. It is used to obtain a new access token when the current one expires. Unlike the access token, the refresh token is typically stored securely and not included in API requests. It is used to request a new access token from the server when the current one expires, without requiring the user to reauthenticate.
                </p>
            </div>
            <div>
                <p className="text-xl" > Q: Compare SQL and NoSQL databases?</p>
                <p>A.SQL
                    1.Follow a relational data model.
                    2.Use predefined schemas with structured data stored in tables.
                    3.Scale vertically by increasing hardware resources.
                    4.Have rigid, predefined schemas.
                    5.Use SQL as the standard query language.
                    6.Support ACID (Atomicity, Consistency, Isolation, Durability) transactions.
                    <br />
                    B.NoSQL:
                    1.Employ various data models (key-value, document, columnar, graph).
                    2.Provide flexible schemas for unstructured or semi-structured data.
                    3.Scale horizontally by distributing data across multiple servers.
                    4.Offer schema flexibility, allowing dynamic or schemaless data.
                    5.Have different query languages depending on the database type.
                    6.May or may not support ACID transactions (depending on the specific NoSQL database).
                </p>
            </div>
            <div>
                <p className="text-xl" > Q:What is express js? What is Nest JS ?</p>
                <p> Express is a node js web application framework that provides broad features for building web and mobile applications.
                    <br />
                    Nest. js uses TypeScript for type checking and provides an out-of-the-box software architecture for building and deploying testable, scalable, loosely coupled, and easily maintainable applications.
                </p>
            </div>
            <div>
                <p className="text-xl" > Q:What is MongoDB aggregate and how does it work ?</p>
                <p> Group values from multiple documents together. Perform operations on the grouped data to return a single result. Analyze data changes over time. Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.
                    
                </p>
            </div>
        </div>
    );
};

export default Blog;