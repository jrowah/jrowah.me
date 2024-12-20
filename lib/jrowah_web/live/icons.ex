defmodule JrowahWeb.Icons do
  @moduledoc false

  use JrowahWeb, :html

  @type assigns :: map()
  @type rendered :: Phoenix.LiveView.Rendered.t()

  @spec clipboard_icon(assigns()) :: rendered()
  def clipboard_icon(assigns) do
    ~H"""
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 3H3C1.89543 3 1 3.89543 1 5V17C1 18.1046 1.89543 19 3 19H13C14.1046 19 15 18.1046 15 17V16M5 3C5 4.10457 5.89543 5 7 5H9C10.1046 5 11 4.10457 11 3M5 3C5 1.89543 5.89543 1 7 1H9C10.1046 1 11 1.89543 11 3M11 3H13C14.1046 3 15 3.89543 15 5V8M17 12H7M7 12L10 9M7 12L10 15"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    """
  end
end
