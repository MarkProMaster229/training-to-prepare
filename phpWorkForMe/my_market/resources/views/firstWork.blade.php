<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>main</title>
</head>
<body>
    <h1>Заголовок первого уровня</h1>
    <p>Это абзац текста.</p>
    <form method="POST" action="/first">
        @csrf
        <input type="text" name="one">
        <input type="text" name="two">
        <button type="submit">Send</button>
    </form>
    <p>{{$value}}</p>
</body>
</html>
