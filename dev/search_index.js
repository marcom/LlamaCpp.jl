var documenterSearchIndex = {"docs":
[{"location":"api/","page":"API Reference","title":"API Reference","text":"CurrentModule = LlamaCpp","category":"page"},{"location":"api/#API-Reference","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"API Reference for LlamaCpp.","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"Modules = [LlamaCpp]","category":"page"},{"location":"api/#LlamaCpp.download_model-Tuple{AbstractString}","page":"API Reference","title":"LlamaCpp.download_model","text":"download_model(url::AbstractString; dir::AbstractString=\"models\")\n\nDownloads a model specified by url from the HuggingFace Hub into dir directory and returns the model_path to the downloaded file. If the dir directory does not exist, it will be created.\n\nNote: Currently allows only models in the GGUF format (expects the URL to end with .gguf).\n\nSee HuggingFace Model Hub for a list of available models.\n\nExamples\n\n# Download the Rocket model (~1GB)\nurl = \"https://huggingface.co/ikawrakow/various-2bit-sota-gguf/resolve/main/rocket-3b-2.76bpw.gguf\"\nmodel = download_model(url) \n# Output: \"models/rocket-3b-2.76bpw.gguf\"\n\n\n\n\n\n","category":"method"},{"location":"api/#LlamaCpp.embeddings-Tuple{LlamaCpp.LlamaContext}","page":"API Reference","title":"LlamaCpp.embeddings","text":"embeddings(ctx) -> Vector{Float32}\n\nReturn the embedding, a vector of length ctx.n_embd.\n\n\n\n\n\n","category":"method"},{"location":"api/#LlamaCpp.llama_eval-Tuple{LlamaCpp.LlamaContext, Vector{Int32}}","page":"API Reference","title":"LlamaCpp.llama_eval","text":"llama_eval(ctx::LlamaContext, tokens; n_past, n_threads=1)\n\n\n\n\n\n","category":"method"},{"location":"api/#LlamaCpp.logits-Tuple{LlamaCpp.LlamaContext}","page":"API Reference","title":"LlamaCpp.logits","text":"logits(ctx::LlamaContext) -> Vector{Float32}\n\nReturn the logits (unnormalised probabilities) for each token, a vector of length ctx.n_vocab.\n\n\n\n\n\n","category":"method"},{"location":"api/#LlamaCpp.run_chat-Tuple{}","page":"API Reference","title":"LlamaCpp.run_chat","text":"run_chat(; model::AbstractString, prompt::AbstractString=\"\", nthreads::Int=Threads.nthreads(), n_gpu_layers::Int=99, ctx_size::Int=2048, args=``)\n\nOpens an interactive console for the model and runs in \"instruction\" mode (especially useful for Alpaca-based models).  prompt, as the first message, is often used to provide instruction about the upcoming interactions (eg, style, tone, roles).\n\nWait for model to reply and then type your response. Press Enter to send the message to the model.\n\nInterrupt the chat with Ctrl+C\n\nSee the full documentation for more details.\n\nArguments\n\nmodel: path to the model to be used\nprompt: prompt to be used. Most models expected these to be formatted in a specific way. Defaults to an empty string\nnthreads: number of threads to use. Defaults to the number of available threads\nn_gpu_layers: number of layers to offload on the GPU (a.k.a. ngl in llama.cpp). Requires more VRAM on your GPU but can speed up inference. Set to 0 to run inference on CPU-only. Defaults to 99 (=practically all layers)\nctx_size: context size, ie, how big can the prompt/inference be. Defaults to 2048 (but most models allow 4,000 and more)\n\nNote: If you get odd responses AND you're using an instruction-tuned (\"fine-tuned\"), it might be that the format of your prompt is not correct.  See HuggingFace's model documentation for the correct prompt format or use a library that will do this for you (eg, PromptingTools.jl)\n\nSee also: run_llama, run_server\n\n\n\n\n\n","category":"method"},{"location":"api/#LlamaCpp.run_llama-Tuple{}","page":"API Reference","title":"LlamaCpp.run_llama","text":"run_llama(; model::AbstractString, prompt::AbstractString=\"\", nthreads::Int=1, n_gpu_layers::Int=99, ctx_size::Int=2048, args=``)\n\nRuns prompt through the model provided and returns the result. This is a single-turn version of run_chat.\n\nSee the full documentation for more details.\n\nArguments\n\nmodel: path to the model to be used\nprompt: prompt to be used. Most models expected these to be formatted in a specific way. Defaults to an empty string\nnthreads: number of threads to use. Defaults to the number of available threads\nn_gpu_layers: number of layers to offload on the GPU (a.k.a. ngl in llama.cpp). Requires more VRAM on your GPU but can speed up inference. Set to 0 to run inference on CPU-only. Defaults to 99 (=practically all layers)\nctx_size: context size, ie, how big can the prompt/inference be. Defaults to 2048 (but most models allow 4,000 and more)\n\nNote: If you get odd responses AND you're using an instruction-tuned (\"fine-tuned\"), it might be that the format of your prompt is not correct.  See HuggingFace's model documentation for the correct prompt format or use a library that will do this for you (eg, PromptingTools.jl)\n\nSee also: run_chat, run_server\n\n\n\n\n\n","category":"method"},{"location":"api/#LlamaCpp.run_server-Tuple{}","page":"API Reference","title":"LlamaCpp.run_server","text":"run_server(; model::AbstractString, host::AbstractString=\"127.0.0.1\", port::Int=10897, nthreads::Int=Threads.nthreads(), \nn_gpu_layers::Int=99, ctx_size::Int=2048, args=``)\n\nStarts a simple HTTP server with the model provided.\n\nOpen http://{host}:{port} in your browser to interact with the model or use an HTTP client to send requests to the server.\n\nInterrupt the server with Ctrl+C.\n\nArguments\n\nmodel: path to the model to be used\nhost: host address to bind to. Defaults to \"127.0.0.1\"\nport: port to listen on. Defaults to 10897\nnthreads: number of threads to use. Defaults to the number of available threads\nn_gpu_layers: number of layers to offload on the GPU (a.k.a. ngl in llama.cpp). Requires more VRAM on your GPU but can speed up inference. Set to 0 to run inference on CPU-only. Defaults to 99 (=practically all layers)\nctx_size: context size, ie, how big can the prompt/inference be. Defaults to 2048 (but most models allow 4,000 and more)\nembeddings: whether to allow generating of embeddings. Defaults to false.  Note: Embeddings are not supported by all models and it might break the server!\nargs: additional arguments to pass to the server\n\nSee the full documentation for more details.\n\nExample\n\n```julia using LlamaCpp\n\nDownload a model from HuggingFace, eg, Phi-2.\n\nSee details here\n\nusing Downloads model = joinpath(\"models\", \"dolphin-26-phi-2.Q6K.gguf\") mkpath(dirname(model)) # ensure the folder exists Downloads.download(\"https://huggingface.co/TheBloke/dolphin-26-phi-2-GGUF/resolve/main/dolphin-26-phi-2.Q6_K.gguf\", model)\n\ngo make a cup of tea while you wait... this is a 2.3GB download\n\nStart the server\n\nrun_server(; model)\n\n\n\n\n\n","category":"method"},{"location":"api/#LlamaCpp.token_to_str-Tuple{LlamaCpp.LlamaContext, Integer}","page":"API Reference","title":"LlamaCpp.token_to_str","text":"token_to_str(ctx, token_id) -> String\n\nString representation for token token_id.\n\n\n\n\n\n","category":"method"},{"location":"api/#LlamaCpp.tokenize-Tuple{LlamaCpp.LlamaContext, AbstractString}","page":"API Reference","title":"LlamaCpp.tokenize","text":"tokenize(ctx :: LlamaContext, text :: AbstractString) -> Vector{llama_token}\n\nTokenizes text according to the LlamaContext ctx and returns a Vector{llama_token}, with llama_token == Int32.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = LlamaCpp","category":"page"},{"location":"#LlamaCpp.jl","page":"Home","title":"LlamaCpp.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Julia interface to llama.cpp, a C/C++ port of Meta's LLaMA (a large language model).","category":"page"},{"location":"","page":"Home","title":"Home","text":"[!WARNING] This project has been renamed from Llama.jl to LlamaCpp.jl to avoid confusion with other projects. If you have an older version of Llama.jl, please remove it and install LlamaCpp.jl.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Press ] at the Julia REPL to enter pkg mode, then:","category":"page"},{"location":"","page":"Home","title":"Home","text":"add https://github.com/marcom/LlamaCpp.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"The llama_cpp_jll.jl package used behind the scenes currently works on Linux, Mac, and FreeBSD on i686, x86_64, and aarch64 (note: only tested on x86_64-linux and aarch64-macos so far).","category":"page"},{"location":"#Downloading-the-model-weights","page":"Home","title":"Downloading the model weights","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You will need a file with quantized model weights in the right format (GGUF).","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can either download the weights from the HuggingFace Hub (search for \"GGUF\" to download the right format) or convert them from the original PyTorch weights (see llama.cpp for instructions.)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Good weights to start with are the Llama3-family fine-tuned weights (here with a Llama-specific licence) or Qwen 2.5 family, which are Apache 2.0 licensed and can be downloaded here. Click on the tab \"Files\" and download one of the *.gguf files. We recommend the Q5KM version (~5.5GB).","category":"page"},{"location":"","page":"Home","title":"Home","text":"In the future, there might be new releases, so you might want to check for new versions.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Once you have a url link to a .gguf file, you can simply download it via:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using LlamaCpp\n# Example for a 360M parameter model (c. 0.3GB)\nurl = \"https://huggingface.co/bartowski/SmolLM2-360M-Instruct-GGUF/resolve/main/SmolLM2-360M-Instruct-Q5_K_S.gguf\"\nmodel = download_model(url)\n# Output: \"models/SmolLM2-360M-Instruct-Q5_K_S.gguf\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can use the model variable directly in the run_* functions, like run_server.","category":"page"},{"location":"#Running-example-executables-from-llama.cpp","page":"Home","title":"Running example executables from llama.cpp","text":"","category":"section"},{"location":"#Simple-HTTP-Server","page":"Home","title":"Simple HTTP Server","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Server mode is the easiest way to get started with LlamaCpp.jl. It provides both an in-browser chat interface and an OpenAI-compatible chat completion endpoint (for packages like PromptingTools.jl).","category":"page"},{"location":"","page":"Home","title":"Home","text":"using LlamaCpp\n\n# Use the `model` downloaded above\nLlamaCpp.run_server(; model)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Just open the URL http://127.0.0.1:10897 in your browser to see the chat interface or use GET requests to the /v1/chat/completions endpoint.","category":"page"},{"location":"","page":"Home","title":"Home","text":"If you use PromptingTools.jl, you can test your local server like this: ai\"say hi!\"local or aigenerate(\"say hi!\").","category":"page"},{"location":"#Llama-Text-Generation","page":"Home","title":"Llama Text Generation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using LlamaCpp\nmodel = \"models/SmolLM2-360M-Instruct-Q5_K_S.gguf\"\n\ns = run_llama(; model, prompt=\"Hello\")\n\n# Provide additional arguments to llama.cpp (check the documentation for more details or the help text below)\ns = run_llama(; model, prompt=\"Hello\", n_gpu_layers=0, args=`-n 16`)\n\n# print the help text with more options\nrun_llama(model=\"\", prompt=\"\", args=`-h`)","category":"page"},{"location":"","page":"Home","title":"Home","text":"[!TIP] If you're getting gibberish output, it's likely that the model requires a \"prompt template\" (ie, structure to how you provide your instructions). Review the model page on HF Hub to see how to use your model or use the server.","category":"page"},{"location":"#Interactive-chat-mode","page":"Home","title":"Interactive chat mode","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"run_chat(; model, prompt=\"Hello chat mode\")","category":"page"},{"location":"#REPL-mode","page":"Home","title":"REPL mode","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The REPL mode is currently non-functional, but stay tuned!","category":"page"},{"location":"#LibLlama","page":"Home","title":"LibLlama","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The libllama bindings are currently non-functional, but stay tuned!","category":"page"}]
}
