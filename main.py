import webview


class Api:
    def my_function(self, input_value):
        print("Python function called with input:", input_value)
        return {"msg": f"Python function executed successfully. Input value: {input_value}",
                "status": "success"}


def start_app():
    api = Api()
    webview.create_window('PyWebView Example', 'index.html', js_api=api)
    webview.start()


if __name__ == '__main__':
    start_app()

