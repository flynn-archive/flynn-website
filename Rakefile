namespace :assets do
  task :precompile do
    sh 'bundle exec middleman build'
  end
end

task :schema do
  require 'fileutils'
  require "erubis"

  FileUtils::Verbose.rm_rf(["schema/controller.json",
                            "schema/controller.md"])

  system(%Q(bundle exec prmd combine -m "schema/meta.json" "schema/schemata/controller" > "schema/controller.json"))
  system(%Q(bundle exec prmd verify "schema/controller.json"))
  system(%Q(bundle exec prmd doc "schema/controller.json" > "schema/controller.md"))

  renderer = Erubis::Eruby.new(File.read("schema/template.md.erb"))
  File.open("source/docs/controller.html.md", "w") do |f|
    content = File.read("schema/controller.md")
    # pygments does not have an alias for term, so substituting bash for term
    # solves this issue
    content.gsub!("```term", "```bash")
    # pygments defaults to json, and strangely, doesn't have an alias for it
    content.gsub!("```json", "```")
    f.write(renderer.result(content: content))
  end
end
