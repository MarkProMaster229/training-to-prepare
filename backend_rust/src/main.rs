use axum::{routing::get, Router};
use tower_http::cors::{CorsLayer, Any};
use axum::http::Method;
use axum::routing::any; 
async fn hello() -> &'static str {
    "Hello World"
}

async fn run_server() {
    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods([Method::GET, Method::POST])
        .allow_headers(Any);

    let app = Router::new()
        .route("/regist", any(hello))
        .layer(cors);

    //let app = Router::new()
    //    .route("/")
    let listener = tokio::net::TcpListener::bind("127.0.0.1:5000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

#[tokio::main]
async fn main() {
    run_server().await;
}