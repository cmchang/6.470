json.array!(@uploads) do |upload|
  json.extract! upload, :id, :name, :rating, :picture
  json.url upload_url(upload, format: :json)
end
